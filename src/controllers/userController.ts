import e, { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import transporter, { EmailComfirmation } from "../helpers/email_tools";
import { UserModel } from "../models/userModel";
import { PaginationResponseEntity } from "../core/entities/pagination.entities";
import { UserEntity } from "../core/entities/user.entities";
import { RoleModel } from "../models/roleModel";
import { AppError } from "../core/errors/custom.errors";


dotenv.config();

const jwt_secret = process.env.JWT_SEED;

export class AuthController{
  private emailConfirmation: EmailComfirmation;

  constructor(){
    this.emailConfirmation = new EmailComfirmation;
    this.registerUser = this.registerUser.bind(this);
  }

  public async getAllUsers( req: Request, res: Response, next: NextFunction): Promise<void> {
      // const  { page, limit } = pagination;
      try{
        const page: number = (req.params.page as unknown) as number ?? 0;
        const limit = 10;
  
        const usersModel = await UserModel.findAndCountAll({
          limit: limit,
          offset: page,
          attributes: ['id', 'fullName', 'email', 'phone']
        });
  
        const total = usersModel.count;
  
        const totalPages = Math.ceil(total / limit) ?? 0;
        const nextPage = page < totalPages ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;
        
        res.json(
          new PaginationResponseEntity(
            total,
            totalPages,
            page,
            nextPage,
            prevPage,
            usersModel.rows.map(user => UserEntity.fromDatabase(user))
          )
        );
      } catch(err){
        res.status(500).json("Internal server error!");
      }
  }


  public async getUserById( req: Request, res: Response, next: NextFunction ): Promise<void> {
      try{
        const id = Number(req.params.id);
  
        const user = await UserModel.findOne({where:{id},
          attributes: ['id', 'fullName', 'email', 'phone'],
          include: [{
            model: RoleModel,
            attributes: ['id', 'name', 'description'],
            as: 'roles'
          }]
        });
  
        if (!user) {
          throw AppError.notFound('Can\'t find User model with the provided id');
        }
  
        res.json(
          UserEntity.fromDatabase(user)
        );
      }catch(err){
        res.status(500).json(`Internal server error! ${err}`)
      }
  }

  public async updateUser( req: Request, res: Response, next: NextFunction): Promise<void> {
		try{
      const id = req.params.id;

      const {
        fullName,
        email,
        phone
      } = req.body;

      const userModel = await UserModel.findByPk(id);
      if (!userModel) {
        throw AppError.notFound(`User with id ${id} not found`);
      }

      userModel.fullName = fullName;
      userModel.email = email;
      userModel.phone = phone;


      await userModel.save();

      res.json(
        UserEntity.fromDatabase(userModel)
      );
    }
    catch(err){
      res.status(500).json("Internal server error!");
    }
  }

  public async deleteUser(req: Request,res: Response,next: NextFunction ): Promise<void> {

		try{
      const id = Number(req.params.id);

      const deleteCount = await UserModel.destroy({where: {id}});

      if (!deleteCount){
        throw AppError.notFound(`User with id ${id} not found`);
      }
      res.json("Succesfully deleted");
    }catch(err){
      res.status(500).json("Internal server error!")
    }
  }
  
  public async login(req:Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
          return
        }

        const{email, password} = req.body;
        const user = await UserModel.findOne
        ({where: {email}, 
          include : {
            model: RoleModel,
            as: 'roles'
          }}
        );

        if (!user) {
          res.status(400).json({ message: 'No user with this email' });
          return
        }

        if (!user.status) {
          res.status(400).json({ message: 'Account not activated' });
          return
        }

        // Check password
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: 'Invalid credentials' });
        return
      }

      const payload = { user: { id: user.id } };
      if (!jwt_secret) {
        res.status(500).json({ message: 'Secret key is required' });
        return
      }

      const token = jwt.sign(payload, jwt_secret, { expiresIn: '1w' });
    }catch(err:any){
      res.status(500).json(err.message);
      };
  };

  public async registerUser(req:Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {email, phone, fullName, password} = req.body

      let user = await UserModel.findOne({where: {email}});

      if (!(user === null)) {
        res.status(400).json({errors: [{msg: 'User already exists'}]})
        return
      }

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      user = await UserModel.create({email, fullName, password:pass, phone, status:false})

      const payload = {user: {id: user.id}}
      const token = jwt.sign(payload, jwt_secret as string, { expiresIn: '1h' });
      
      user.verificationToken = token;
      await user.save();  
      console.log("token___________---------------------______", token)

      await this.emailConfirmation.sendConfirmationEmail({ email, token });
      res.status(201).send({ message: `Email sent to ${email}. Check email and confirm. Here is the confirmation token ${token}` });
    }catch(err){
      res.status(5000).json('Internal server error!')
    }
  }

  public async requestPasswordReset(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
  
      const user = await UserModel.findOne({ where: { email } });
      if (!user) {
        res.status(400).json({ message: 'User not found' });
        return
      }
  
      // Generate reset token with expiration
      const resetToken = jwt.sign({ id: user.id }, jwt_secret as string, { expiresIn: '1h' });
  
      // Send email with reset token link
      const resetLink = `https://example.com/reset-password?token=${resetToken}`;
      await transporter.sendMail({
        from: '"Your App" <no-reply@example.com>',
        to: user.email,
        subject: 'Password Reset Request',
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link is valid for 1 hour.</p>`,
      });
  
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async validateResetToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { token } = req.query;

    if (!token) {
      res.status(400).json({ message: 'Token is required' });
      return
    }
    
    const decoded = jwt.verify(token as string, jwt_secret as string) as { id: string };
    req.userId = decoded.id;
    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token has expired. Please log in again." });
    } else if (err.name === "JsonWebTokenError") {
      res.status(401).json({ message: "Invalid token. Access denied." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }}

  public async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { password } = req.body;
      const userId  = req.userId;
  
      const user = await UserModel.findByPk(userId);
      if (!user) {
        res.status(400).json({ message: 'User not found' });
        return;
      }
  
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
  
      res.status(200).json({ message: 'Password successfully reset' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async verifyEmail(req: Request, res: Response): Promise<void> {
    try {
      const {token}  = req.params;
      console.log("printed, tokekn*****************", token)

      const decoded = jwt.verify(token as string,jwt_secret as string ) as {token: string};
      // const user = await UserModel.findOne({ where: { token: decoded.token } });

      // if (!user) {
      //   res.status(404).json({ message: "User not found" });
      //   return;
      // }

      // if (user.emailVerified) {
      //   res.status(400).json({ message: "User is already verified" });
      //   return;
      // }

      // user.emailVerified = true;
      // await user.save();

      // res.status(200).json({ message: "Email verified successfully" });

    } catch (err) {
      console.error(err);

      if (err instanceof jwt.JsonWebTokenError) {
        res.status(400).json({ message: "Invalid or expired token" });
        return;
      }

      res.status(500).json({ message: "Internal server error" });
    }
  }
}


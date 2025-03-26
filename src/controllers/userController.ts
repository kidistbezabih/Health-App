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
import { RoleUserModel } from "../models/roleUserModel";
import { DB } from "../models";

dotenv.config();

const jwt_secret = process.env.JWT_SEED;

export class AuthController{
  private emailConfirmation: EmailComfirmation;

  constructor(){
    this.emailConfirmation = new EmailComfirmation;
    this.registerUser = this.registerUser.bind(this);
  }

  public async getAllUsers( req: Request, res: Response): Promise<void> {
      // const  { page, limit } = pagination;
      try{

        if (!req.user){
          res.status(401).json({message: "Unauthorized"})
          return
        }

        const {id: userId, roles} = req.user
        const page: number = (req.params.page as unknown) as number ?? 0;
        const limit = 10;
  
        const usersModel = await UserModel.findAndCountAll({
          limit: limit,
          offset: page,
          attributes: ['id', 'fullName', 'email', 'phone', 'emailVerified']
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
        res.status(500).json({"Internal server error!":err});
      }
  }


  public async getUserById( req: Request, res: Response, next: NextFunction ): Promise<void> {
      try{
        const id = Number(req.params.id);

        console.log('id', id)
  
        const user = await UserModel.findOne({where:{id},
          attributes: ['id', 'fullName', 'email', 'phone'],
          include: [{
            model: RoleModel,
            attributes: ['id', 'name', 'description'],
            as: 'roles', 
            through: {}
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

        const {email, password} = req.body;
        const user = await UserModel.findOne
        ({where: {email}, 
          include : [{
            model: RoleModel,
            as: 'roles',
            attributes: ["name"], 
            through: {}
          }]}
        );

        console.log('User', user)

        if (!user) {
          res.status(400).json({ message: 'No user with this email' });
          return
        }

        if (!user.emailVerified) {
          res.status(400).json({ message: 'Account not activated' });
          return
        }

        // Check password
      const isMatch = await bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: 'Invalid credentials' });
        return
      }

      const payload = {  id: user.id, institutionId: user. };
      if (!jwt_secret) {
        res.status(500).json({ message: 'Secret key is required' });
        return
      }

      const token = jwt.sign(payload, jwt_secret, { expiresIn: '1w' });

      res.json({user, token})
    }catch(err:any){
      console.log(err)
      res.status(500).json({"error":err});
      };
  };

  public async registerUser(req:Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {email, phone, fullName, password, roles} = req.body;
      const transaction = await UserModel.sequelize?.transaction();

      let user = await UserModel.findOne({
        where: { email }
      });

      if (!(user === null)) {
        res.status(400).json({errors: [{msg: 'User already exists'}]})
        return
      }

      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      user = await UserModel.create({email, fullName, password:pass, phone, emailVerified:false}, { transaction })


      if (roles && roles.length > 0){
        const validRoles = await RoleModel.findAll({
          where: { id: roles}, 
          transaction
        })

        if (validRoles.length !== roles.length){
          throw Error("Invalid roles provided!")
        } 

        const roleUserEntries = validRoles.map((role) => ({
          userId: user.id,
          roleId: role.id
      }));
      await RoleUserModel.bulkCreate(roleUserEntries, { transaction });
    }

      const payload = {user: {id: user.id}}
      const token = jwt.sign(payload, jwt_secret as string, { expiresIn: '1w' });

      user.verificationToken = token;
      await user.save({ transaction });

      await transaction?.commit();

      await this.emailConfirmation.sendConfirmationEmail({ email, token });
      res.status(201).send({ message: `Email sent to ${email}. Check email and confirm. Here is the confirmation token ${token}` });
    }catch(err){
      res.status(500).json({message: "Internal server error!", error: (err as Error).message})
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
  
      // Send email with reset\\\ token link
      console.log("token___________---------------------______", resetToken)

      const resetLink = `http://localhost:4000/api/v1/user/reset-password?token=${resetToken}`;
      await transporter.sendMail({
        from: '"Your App" <no-reply>@example.com',
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

  public async resetPassword(req: Request, res: Response): Promise<void> {
    try {
        const { password } = req.body;
        const { token } = req.query;
        console.log(password, token)

        // Check if token is provided
        if (!token) {
          res.status(400).json({ message: 'Token is required' });
          return
        }
        console.log("twos", password, token);
        // Decode and validate the token
        let decoded;
        try {
            decoded = jwt.verify(token as string, jwt_secret as string) as { id: string };

            console.log("decoded : ", decoded)
        } catch (err: any) {
            if (err.name === "TokenExpiredError") {
              res.status(401).json({ message: "Token has expired. Please request a new password reset." });
              return   
            } else if (err.name === "JsonWebTokenError") {
              res.status(401).json({ message: "Invalid token. Access denied." });
              return  
            }
            res.status(500).json({ message: "Internal server error." });
            return
          }

        // If token is invalid or expired, return error
        if (!decoded || !decoded.id) {
            res.status(400).json({ message: 'Invalid token' });
            return
          }

        // Get the user using the decoded userId
        console.log("decode id:", decoded.id)
        const user = await UserModel.findOne({where: {id:decoded.id}});
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return
        }

        // Hash the new password and save it
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.status(200).json({ message: 'Password successfully reseted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
  }


  public async verifyEmail(req: Request, res: Response): Promise<void> {
    try {
      const {token}  = req.query;

      const decoded: any = jwt.verify(token as string, jwt_secret as string);
      const user = await UserModel.findOne({ where: { id: decoded.user.id } })

      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      if (user.emailVerified) {
        res.status(400).json({ message: "User is already verified" });
        return;
      }

      user.emailVerified = true;
      await user.save();
      console.log(user)

      res.status(200).json({ message: "Email verified successfully" });
      return

    } catch (err) {

      if (err instanceof jwt.JsonWebTokenError) {
        res.status(400).json({ message: "Invalid or expired token", err });
        return;
      }

      res.status(500).json({ message: "Internal server error" , err});
    }
  }
}

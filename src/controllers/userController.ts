import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import { RoleModel } from '../models/roleModel';
import { UserEntity } from '../core/entities/user.entities';
import { PaginationResponseEntity } from '../core/entities/pagination.entities';
import { AppError } from '../core/errors/custom.errors';
import { CustomHash } from '../core/config/encrypt.adapter';
import { error } from 'console';
const config = require('../config/default.json')

// Create a new user
export class UserController {
	public async createUser( req: Request, res: Response, next: NextFunction): Promise<void> {
    try{
		const {	fullName,	email,	phone} = req.body;

		const userModel = await UserModel.create({
			fullName,
			email,
			phone,
			status: false,
			password: await CustomHash.hashPassword('12345678')
		});

		res.json(	UserEntity.fromDatabase(userModel));
    }catch(err){
      res.status(500).json("Internal server error!")
    }
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

  public async getUserById( req: Request, res: Response, next: NextFunction
	): Promise<void> {
    try{
      const id = Number(req.params.id);

      const user = await UserModel.findByPk(id, {
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
      res.status(500).json("Internal server error!")
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
      const id = req.params.id;

      const userModel = await UserModel.findByPk(id);

      if (!userModel) {
        throw AppError.notFound(`User with id ${id} not found`);
      }

      const count = await UserModel.destroy();

      if (count){
        throw AppError.notFound(`User with id ${id} not found`);
      }
      res.json("Succesfully deleted");
    }catch(err){
      res.status(500).json("Internal server error!")
    }
  }
}
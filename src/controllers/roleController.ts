import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import { RoleModel } from '../models/roleModel';
import { UserEntity } from '../core/entities/user.entities';
import { PaginationResponseEntity } from '../core/entities/pagination.entities';
import { AppError } from '../core/errors/custom.errors';
import { CustomHash } from '../core/config/encrypt.adapter';
import { RoleEntity } from '../core/entities/role.entities.';


// Create a new user
export class RoleController {
  public async createRole( req: Request, res: Response, next: NextFunction ): Promise<void>{
    try{
      const {
        name,
        description
      } = req.body;

      const roleModel = await RoleModel.create({
        name,
        description,
      });
      if (!roleModel){
        res.status(400).json({message: "Fail to create! "});  
      }
      res.status(200).json({message: "successfully created"});
    }catch(err){
      res.status(500).json("internal server error")
    }
  }

  public async getAllRoles( req: Request, res: Response, next: NextFunction ): Promise<void>{
    // const { page, limit } = pagination;
   try{
    const page: number = (req.params.page as unknown) as number ?? 0;
    const limit = 10;

    const roleModel = await RoleModel.findAndCountAll({
      limit: limit,
      offset: page,
      attributes: ['id', 'name', 'description']
    });

    const total =roleModel.count;

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
        roleModel.rows.map(role => RoleEntity.fromDatabase(role))
      )
    );
    }
    catch(err){
      res.status(500).json("Internal server error!")
    }
  }

  public async getRoleById( req: Request, res: Response, next: NextFunction ): Promise<void> {
    try{
    const id = Number(req.params.id);

    const role = await RoleModel.findByPk(id, {
      attributes: ['id', 'name', 'description'],
      include: [{
        model: UserModel,
        attributes: ['id','email','phone','fullName'],
        as: 'users'
      }]
    });

    if (!role) {
      throw AppError.notFound('Can\'t find User model with the provided id');
    }

    res.json(RoleEntity.fromDatabase(role));
    }catch(err){
      res.status(500).json("internal server error")
    }
  }

  public async updateRole( req: Request, res: Response, next: NextFunction ): Promise<void> {
    try{
      const id = req.params.id;

      const { name, description } = req.body;

      const roleModel = await RoleModel.findByPk(id);
      if (!roleModel) {
        throw AppError.notFound(`User with id ${id} not found`);
      }

      roleModel.name = name;
      roleModel.description = description;

      await roleModel.save();

      res.json(
        RoleEntity.fromDatabase(roleModel)
      );
    }catch(err){
      res.status(500).json("Internal server error!")
    }
  }

  public async deleteRole( req: Request, res: Response, next: NextFunction ): Promise<void> {
    try{
      const id = req.params.id;

      const roleModel = await RoleModel.findByPk(id);

      if (!roleModel) {
        throw AppError.notFound(`User with id ${id} not found`);
      }

      const count = await RoleModel.destroy();

      if (count){
        throw AppError.notFound(`User with id ${id} not found`);
      }
      res.json("Succesfully deleted");
    }catch(err){
      res.status(400).json("Intenal server error!")
    }
  }
}
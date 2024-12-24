
import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/custom.errors";
import { InstitutionModel } from "../models/institutionModel";
import { where } from "sequelize";


interface institutionEntity{
  name: string;
  adress: string;
}

export class InstutitionController{

  constructor(){
  }

  public async registerInstitution(req: Request<institutionEntity>, res: Response, next: NextFunction):Promise<void>{
    try{
      const {name, adress} = req.body;

      const institution = InstitutionModel.create(
        name,
        adress
      );

      if (!institution){
        AppError.badRequest("Fail to register an institution!");
      }
      res.status(201).json({message: "Successfully registered"});
    }catch(err){
      next(err);
    }
  }

  public async getInstitutionById(req: Request<{id: number}>, res: Response, next: NextFunction):Promise<void>{
    try{
      const {id} = req.params;
      const institution = await InstitutionModel.findOne({where: {id}});

      if (!institution){
        AppError.badRequest("No institution with this id!");
      }
      res.json(institution)
    }catch(err){
      next(err);
    }
  }

  public async updateInstitutionById(req: Request<{id: number}>, res: Response, next: NextFunction):Promise<void>{
    try{
      const {id} = req.params;

      const {name, adress} = req.body;
      const institution = await InstitutionModel.findOne({where: {id}});

      if (institution){
        institution.name = name||null
        institution.address = adress || null
        await institution.save()
      }else{
        AppError.badRequest("No institution with this id!");
      }
      res.json(institution)
    }catch(err){
      next(err);
    }
  }


  public async deleteInstitution(req: Request<{id: number}>, res: Response, next: NextFunction):Promise<void>{
    try{
      const {id} = req.params;
      const deletCount = await InstitutionModel.destroy({where: {id}})

      if (!deletCount){
        throw AppError.notFound("Can't find institution with this id!")
      }
      res.status(201).json({message: "Successfully deleted"})
    }catch(err){
      next(err);
    }
  }
}
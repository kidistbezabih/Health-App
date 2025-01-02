
import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/custom.errors";
import { InstitutionModel } from "../models/institutionModel";
import { InstitutionService } from "../services/institutionServices";


interface institutionEntity{
  name: string;
  adress: string;
  phone: string;
  email: string;
  googleMapsLocation: string;
}

export class InstutitionController{
  private institutionService: InstitutionService; 

  

  constructor(){
    this.institutionService = new InstitutionService();
    this.getInstitutions = this.getInstitutions.bind(this);

  }

  public async registerInstitution(req: Request, res: Response, next: NextFunction):Promise<void>{
    try{
      const {name, address, phone, email, googleMapsLocation}  = req.body;

      const institution = InstitutionModel.create({
        name,
        address,
        phone,
        email,
        googleMapsLocation
      });

      if (!institution){
        AppError.badRequest("Fail to register an institution!");
      }
      res.status(201).json({message: "Successfully registered"});
    }catch(err){
      next(err);
    }
  }

  public async getInstitutions(req: Request, res: Response, next: NextFunction):Promise<void>{
    try{
      const institutions = await this.institutionService.getInstitutions();
      console.log("here is the list of institutions registered!")
      console.log(institutions)

      if (institutions.length === 0){
        res.status(400).json({message: "No institution found!"})
        return;
      }
      res.json(institutions);
    }catch(err){
      next(err);
    }
  }

  public async getInstitutionById(req: Request, res: Response, next: NextFunction):Promise<void>{
    try{
      const {id} = req.params;
      const institution = await InstitutionModel.findOne({ where: { id: parseInt(id, 10)} });
      console.log(institution)

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
        institution.name = name||institution.name
        institution.address = adress || institution.address
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
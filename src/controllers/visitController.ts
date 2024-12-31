import { Request, Response, NextFunction } from "express";
import { VisitService } from "../services/visitServices";
import { AppError } from "../core/errors/custom.errors";

export class VisitController{
  private visitService: VisitService;

  constructor(){
    this.visitService = new VisitService();
  }

  public async createVisit(req: Request<{patientId: number}>, res: Response, next: NextFunction):Promise<void>{
    try
      {const {patientId} = req.params;

      const visit = this.visitService.createVisit(patientId);
      if(!visit){
        res.status(200).json({message: "Unable to crete patient visit"})
      }
      res.status(201).json({message: "Visit is creted successfully"})
    }catch(err){
      next(err);
    }
  }

    // public async getPatientVisitHistory(req: Request<{patientId: number}>, res: Response, next: NextFunction): Promise<void>{
    // try{

    //   const {patientId} = req.params;

    //   const visits = await this.visitService.getPatientVistsById(patientId);

    //   if (!visits){
    //     throw AppError.notFound("No history with this recorded")
    //   }
    //   res.json(visits)
    // }catch(err){
    //   next(err)
    // }}

  public async deleteVisit(req: Request<{id: number}>, res: Response, next: NextFunction):Promise<void>{
    try
      {const {id} = req.params;

      if (!id){
        throw AppError.badRequest("Visit id is required!");
      }

      const isDeleted = this.visitService.deleteVisitById(id);
      if(!isDeleted){
        throw AppError.badRequest("Fail to delete visit!")
      }

      res.status(201).json({message: "Visit is creted successfully"})
    }catch(err){
      next(err);
    }
  }
}
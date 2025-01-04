import { Request, Response, NextFunction } from "express";
import { VisitService } from "../services/visitServices";
import { AppError } from "../core/errors/custom.errors";
import { VisitModel } from "../models/visitModel";

export class VisitController{
  private visitService: VisitService;

  constructor(){
    this.visitService = new VisitService();
    this.createVisit = this.createVisit.bind(this); 
    this.deleteVisit = this.deleteVisit.bind(this);
    this.getPatientVisitHistory = this.getPatientVisitHistory.bind(this);
  }

  public async createVisit(req: Request<{patientId: number}>, res: Response, next: NextFunction):Promise<void>{
    try
      {const patientId = Number(req.params.patientId);

      const visit = this.visitService.createVisit(patientId);
      if(!visit){
        res.status(200).json({message: "Unable to crete patient visit"})
      }
      res.status(201).json({message: "Visit is creted successfully"})
    }catch(err){
      next(err);
    }
  }

  public async getAllVisits(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const visits = await VisitModel.findAll(); // Replace with your ORM method (e.g., Sequelize, Mongoose, etc.)

        if (visits && visits.length > 0) {
            res.status(200).json({
                message: 'Visits retrieved successfully',
                data: visits,
            });
        } else {
            res.status(404).json({
                message: 'No visits found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while retrieving visits',
        });
    }
}

    public async getPatientVisitHistory(req: Request<{patientId: number}>, res: Response, next: NextFunction): Promise<void>{
    try{

      const patientId = Number(req.params.patientId);

      const visits = await this.visitService.getPatientVistsById(patientId);

      if (!visits){
        throw AppError.notFound("No patient visit history!")
      }
      res.json(visits)
    }catch(err){
      next(err)
    }}



  public async deleteVisit(req: Request<{id: number}>, res: Response, next: NextFunction):Promise<void>{
    try
      {const id = Number(req.params.id);

      const isDeleted = this.visitService.deleteVisitById(id);
      if(!isDeleted){
        throw AppError.badRequest("Fail to delete visit!")
      }

      res.status(201).json({message: "Visit is deleted successfully"})
    }catch(err){
      next(err);
    }
  }
}
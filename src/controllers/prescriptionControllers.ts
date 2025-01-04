
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { PrescriptionService } from "../services/prescriptionServices";
import { PrescriptionEntity } from "../core/entities/prescriptioin.entities";

export class PrescriptionController{
  private prescriptionService : PrescriptionService;

  constructor(){
    this.prescriptionService = new PrescriptionService();
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async createPrescription(req: Request<PrescriptionEntity>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {visitId, cardNumber, status, diagnosisIfNotICD, drugDetail, prescribersName } = req.body;

      const Prescription = this.prescriptionService.createPrescritpion(
        visitId, cardNumber, status, diagnosisIfNotICD, drugDetail, prescribersName
      );

      if(!Prescription){
        AppError.badRequest("Fail to create Prescription!");
      }

      res.status(201).json("Laboratory Prescription is successfully created!")
    }catch(err){
    next(err);
    }
  }


  public async getPrescription(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const prescription = this.prescriptionService.getPrescription(id);

      if (!prescription){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json({lab_order: {prescription}})
  }catch(err){
    next(err)
  }}


public async updatePrescription(req: Request<{id:number, status:string, diagnosisIfNotICD:string, drugDetail:string, prescribersName:string}, PrescriptionEntity>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);
      const { status, diagnosisIfNotICD, drugDetail, prescribersName } = req.body;

      const prescription = this.prescriptionService.updatePrescription(id, status, diagnosisIfNotICD, drugDetail, prescribersName

      );

      if (!prescription){
        AppError.badRequest("No prescription with this id!")
      }
      res.status(201).json("Prescription is updated successfully!")
  }catch(err){
    next(err)
  }}


  public async deletePrescrition(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const prescriptioin = this.prescriptionService.deletePrescription(id);

      if (!prescriptioin){
        AppError.badRequest("No prescriptioin with this id!")
      }
      res.status(201).json("Prescriptioin is deleted successfully")
  }catch(err){
    next(err)
  }}

}
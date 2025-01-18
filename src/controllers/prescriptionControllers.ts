
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { PrescriptionService } from "../services/prescriptionServices";
import { PrescriptionEntity } from "../core/entities/prescriptioin.entities";
import { PrescriptionModel } from "../models/prescriptionModel";

export class PrescriptionController{
  private prescriptionService : PrescriptionService;

  constructor(){
    this.prescriptionService = new PrescriptionService();
    this.createPrescription = this.createPrescription.bind(this);
    this.getPrescription = this.getPrescription.bind(this);
    this.updatePrescription = this.updatePrescription.bind(this);
    this.deletePrescrition = this.deletePrescrition.bind(this);
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async createPrescription(req: Request<PrescriptionEntity>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        visitId,
        medicationType,
        medication,
        dosage,
        instruction,
      } = req.body;

      const Prescription = await this.prescriptionService.createPrescription(
        visitId, 
        medicationType,
        medication,
        dosage,
        instruction,
      );

      if(!Prescription){
        throw AppError.badRequest("Fail to create Prescription!");
      }

      res.status(201).json("Prescription is successfully created!")
    }
    catch(err){
         res.status(500).json({messsage: "internal server error", error: err})
      }
  }

  public async getPrescription(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const prescription = await this.prescriptionService.getPrescription(id);

      if (!prescription){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json(prescription)
  }catch(err){
       res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getAllPrescription(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{

      const prescriptions = await PrescriptionModel.findAll();
      console.log("prescriptions", prescriptions);

      if (!prescriptions){
        AppError.badRequest;
      }
      res.status(201).json(prescriptions);
  }catch(err){
       res.status(500).json({messsage: "internal server error", error: err})
    }
  }


public async updatePrescription(req: Request<{id:number, status:string, diagnosisIfNotICD:string, drugDetail:string, prescribersName:string}, PrescriptionEntity>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);
      const { 
        medicationType,
        medication,
        dosage,
        instruction,
       } = req.body;

      const prescription = this.prescriptionService.updatePrescription(
        id,
        medicationType,
        medication,
        dosage,
        instruction, 

      );

      if (!prescription){
        AppError.badRequest("No prescription with this id!")
      }
      res.status(201).json("Prescription is updated successfully!")
  }catch(err){
       res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async deletePrescrition(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const prescriptioin = this.prescriptionService.deletePrescription(id);

      if (!prescriptioin){
        AppError.badRequest("No prescriptioin with this id!")
      }
      res.status(201).json("Prescriptioin is deleted successfully")
  }catch(err){
       res.status(500).json({messsage: "internal server error", error: err})
    }
  }

}
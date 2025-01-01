import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { ExaminationModel } from "../models/examinationModel";
import { PreExaminationService } from "../services/preExaminationServices";
import { VisitService } from "../services/visitServices";
import { ExaminationService } from "../services/examinationServices";

interface examinationRecord{
  visitId: number
  symptoms: string, 
  bloodPressure: string, 
  bodyTemperature: string, 
  respirationRate: string, 
  oxygenSaturation: string, 
  weight: string, 
  height: string
}

export class ExaminationController{

  private preExaminationService : PreExaminationService;
  private visitService : VisitService
  private examinationService: ExaminationService

  constructor(){
    this.preExaminationService = new PreExaminationService();
    this.visitService = new VisitService();
    this.examinationService = new ExaminationService();
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async addExaminationRecord(req: Request<examinationRecord>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        symptoms, 
        bloodPressure, 
        bodyTemperature, 
        respirationRate, 
        oxygenSaturation, 
        weight, 
        height
      } = req.body;

      const {visitId} = req.params;

      if (!visitId){
        throw AppError.notFound("No patient with this id");
      }

      const patientInfo = await ExaminationModel.create({
        visitId,
        symptoms, 
        bloodPressure, 
        bodyTemperature, 
        respirationRate, 
        oxygenSaturation, 
        weight, 
        height
      });

      if (patientInfo){
        res.status(201).json({message: "Patient record successfully added"});
      }else{
        throw AppError.badRequest("Fail to create patient record");
      }
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getPatientPreExaminationRecord(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

    const patientInfo = this.preExaminationService.getPreExaminationRecordById(id);

    if (!patientInfo){
      res.status(200).json({message: "can't get patient pre examination info "})
    }
    res.json(patientInfo)  
  }catch(err){
    next(err)
  }}

  public async deletePatientExamination(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const examinationResult = this.examinationService.deleteExamination(id);

      if (!examinationResult){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }catch(err){
      next(err)
    }
  }
  }
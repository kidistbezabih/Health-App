import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { ExaminationModel } from "../models/examinationModel";
import { PreExaminationService } from "../services/preExaminationServices";
import { VisitService } from "../services/visitServices";
import { ExaminationService } from "../services/examinationServices";

export class ExaminationController{
  private examinationService: ExaminationService

  constructor(){
    this.examinationService = new ExaminationService();

    this.addExaminationRecord = this.addExaminationRecord.bind(this);
    this.getPatientExaminationRecord = this.getPatientExaminationRecord.bind(this);
    this.deletePatientExamination = this.deletePatientExamination.bind(this);
    this.getAllExaminations = this.getAllExaminations.bind(this);
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async addExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        visitId,
        symptoms, 
        bloodPressure, 
        bodyTemperature, 
        respirationRate, 
        oxygenSaturation, 
        weight, 
        height
      } = req.body;


      const patientData = await ExaminationModel.create({
        visitId,
        symptoms, 
        bloodPressure, 
        bodyTemperature, 
        respirationRate, 
        oxygenSaturation, 
        weight, 
        height
      });

      if (!patientData){
        AppError.badRequest("Unable to add patient examination record");
      }
       res.status(201).json({message: "Patient record successfully added"});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getPatientExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const visitId = req.params.visitId;

      const patientData = await this.examinationService.getPatientExaminationRecord(parseInt(visitId));

      if (!patientData){
        console.log("the error occur here")
        AppError.badRequest("no patient with this vist id!");
      }
      res.json(patientData)  
    }catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getAllExaminations(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const examinations = await this.examinationService.getAllExaminationRecords(); 

      if (!examinations || examinations.length === 0) {
        res.status(400).json({message: "can't get patient  examination info "})
      }

      res.json({data: examinations});
    } catch (error) {
      res.status(500).json({messsage: "internal server error", error})
    }
  }

  public async deletePatientExamination(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const examinationResult = await this.examinationService.deleteExamination(id);

      if (!examinationResult){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }
  }}
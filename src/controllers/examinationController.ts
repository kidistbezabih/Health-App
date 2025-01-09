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
  weight: number, 
  height: number
}

export class ExaminationController{

  private preExaminationService : PreExaminationService;
  private examinationService: ExaminationService

  constructor(){
    this.examinationService = new ExaminationService();
    this.preExaminationService = new PreExaminationService();

    this.getPatientExaminationRecord = this.getPatientExaminationRecord.bind(this);
    this.deletePatientExamination = this.deletePatientExamination.bind(this)
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async addExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void>{
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

      const visitId = Number(req.params.visitId);

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

      if (!patientInfo){
        throw AppError.badRequest("Fail to create patient record");
      }
       res.status(201).json({message: "Patient record successfully added"});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getPatientExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const visitId = Number(req.params.visitId);

      const patientInfo = this.examinationService.getPatientExaminationRecord(visitId);
      if (!patientInfo){
        res.status(400).json({message: "can't get patient  examination info "})
      }
      res.json(patientInfo)  
    }catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }}

  public async getAllExaminations(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const examinations = await ExaminationModel.findAll(); 

      if (!examinations || examinations.length === 0) {
        res.status(404).json({ message: "No examination record found." });
        return;
      }

      res.status(200).json({
        data: examinations,
      });
    } catch (error) {
      res.status(500).json({messsage: "internal server error", error})
    }
  }

  public async deletePatientExamination(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const examinationResult = this.examinationService.deleteExamination(id);

      if (!examinationResult){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }
  }}
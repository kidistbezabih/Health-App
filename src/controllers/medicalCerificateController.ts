import { NextFunction, Request, Response } from "express";
import { MedicalCertificateServices } from "../services/medicalCertificateServices";
import { AppError } from "../core/errors/custom.errors";

export class MedicalCertificateController{

  private medicalCertificateServices : MedicalCertificateServices;

  constructor(){
    this.medicalCertificateServices = new MedicalCertificateServices();
    this.createMedicalCertificate = this.createMedicalCertificate.bind(this);
    this.getPatientMedicalCeritificate = this.getPatientMedicalCeritificate.bind(this);
    this.getAllMedicalCertificate = this.getAllMedicalCertificate.bind(this);
    this.deletePatientExamination = this.deletePatientExamination.bind(this);
    this.updateMedicalCertificate = this.updateMedicalCertificate.bind(this);
  }

  public async createMedicalCertificate(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        dateOfExamination,
        diagnosis,
        treatmentGiven,
        sickLeave
      } = req.body;

      const visitId = Number(req.params.visitId);

      const medicalCertificate = await this.medicalCertificateServices.creatMedicalCertificate(
        visitId,
        dateOfExamination,
        diagnosis,
        treatmentGiven,
        sickLeave,
      )

      if (!medicalCertificate){
        throw AppError.badRequest;
      }
       res.status(201).json({message: "Successfully added"});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getPatientMedicalCeritificate(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const medicalCertificate = await this.medicalCertificateServices.getMedicalCertificate(id);
      if (!medicalCertificate){
        res.status(400).json({message: "can't get patient  examination info "})
      }
      res.json(medicalCertificate)  
    }
    catch(err){
        res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getAllMedicalCertificate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const medicalCertificates = await this.medicalCertificateServices.getAllMedicalCertificate();
      if(!medicalCertificates){
        AppError.badRequest;
      }
      res.status(200).json({
        data: medicalCertificates,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async updateMedicalCertificate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {
        dateOfExamination,
        diagnosis,
        treatmentGiven,
        sickLeave
      } = req.body;
      const id = Number(req.params.id)
      
      const medicalCertificate = await this.medicalCertificateServices.updateMedicalCertificate(
        id,
        dateOfExamination,
        diagnosis,
        treatmentGiven,
        sickLeave
      );

      res.status(200).json({
        data: medicalCertificate,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async deletePatientExamination(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const deletedCount = await this.medicalCertificateServices.deleteMedicalCertificate(id);

      if (!deletedCount){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }
    catch(err){
        res.status(500).json({messsage: "internal server error", error: err})
    }

  }
  }
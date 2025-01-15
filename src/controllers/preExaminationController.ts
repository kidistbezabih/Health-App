import Redis from "ioredis"
import { PATIENT_QUEUE } from "../core/redis";
import { PatientService } from "../services/patientServices";
import { AppError } from "../core/errors/custom.errors";
import { PatientEntity } from "../core/entities/patient.entities";
import { PreExaminationModel } from "../models/preExaminationModel";
import { Request, Response, NextFunction } from "express";
require('dotenv').config();


const redis = new Redis({
  host: process.env.REDIS_HOST,  // Uses the Redis host defined in .env
  port: parseInt(process.env.REDIS_PORT || '6379'),
});

export class PreExaminationController{
  private patientService : PatientService;

  constructor(){
    this.patientService = new PatientService();
  }
  
   // pre examination
  public async ProceedToNextPateient(req:Request, res:Response, next:NextFunction): Promise<void>{
    try{const patientCardNumber = await redis.lpop(PATIENT_QUEUE);

    if (!patientCardNumber){
      throw AppError.notFound("No patient")
    }

    const patientDetail = await this.patientService.getPatient(patientCardNumber);
    res.status(201).json(patientDetail);
  }catch(err){
    res.status(500).json({messsage: "internal server error", error: err});
  }
  };

  // Recording symtomes
  public async recordPatientSymptoms(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // Destructure patient symptom data from the request body
        const {
            chiefComplaint,
            hpi,
            pastHx,
            currentHealthStatus,
            familyHx,
            psychologicalAndPersonalHx,
            general,
            skin,
            head,
            eyes,
            ear,
            mouth,
            breast,
            respiratory,
            gastro,
            guneto,
            meskal,
            nervous,
            examinedBy
        } = req.body;

        // Parse visitId from request params
        const visitId = Number(req.params.visitId);
        
        // Validate visitId
        if (!visitId) {
            throw AppError.notFound("No patient with this visit id");
        }

        // Create a new patient symptom record in the database
        const patientSymptom = await PreExaminationModel.create({
            visitId,
            chiefComplaint,
            hpi,
            pastHx,
            currentHealthStatus,
            familyHx,
            psychologicalAndPersonalHx,
            general,
            skin,
            head,
            eyes,
            ear,
            mouth,
            breast,
            respiratory,
            gastro,
            guneto,
            meskal,
            nervous,
            examinedBy
        });

        // Respond with success or failure message
        if (patientSymptom) {
            res.status(201).json({ message: "Patient symptoms successfully recorded" });
        } else {
            throw AppError.badRequest("Failed to create patient symptoms");
        }

    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err });
    }
}

  // 
  public async getPreExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const visitId = Number(req.params.visitId);
        
        if (!visitId) {
            throw AppError.notFound("Visit ID is required");
        }

        const patientRecord = await PreExaminationModel.findOne({
            where: { visitId }
        });

        if (!patientRecord) {
            throw AppError.notFound("No pre-examination record found for this visit ID");
        }
        res.status(200).json({
            data: patientRecord
        });
    } catch(err){
          res.status(500).json({messsage: "internal server error", error: err});
      }
    }

public async updatePreExaminationRecord(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
      const visitId = Number(req.params.visitId);
      if (!visitId) {
          throw AppError.notFound("Visit ID is required");
      }

      const {
          chiefComplaint,
          hpi,
          pastHx,
          currentHealthStatus,
          familyHx,
          psychologicalAndPersonalHx,
          general,
          skin,
          head,
          eyes,
          ear,
          mouth,
          breast,
          respiratory,
          gastro,
          guneto,
          meskal,
          nervous,
          examinedBy
      } = req.body;

      const patientRecord = await PreExaminationModel.findOne({
          where: { visitId }
      });

      if (!patientRecord) {
          throw AppError.notFound("No pre-examination record found for this visit ID");
      }

      const updatedRecord = await patientRecord.update({
          chiefComplaint,
          hpi,
          pastHx,
          currentHealthStatus,
          familyHx,
          psychologicalAndPersonalHx,
          general,
          skin,
          head,
          eyes,
          ear,
          mouth,
          breast,
          respiratory,
          gastro,
          guneto,
          meskal,
          nervous,
          examinedBy
      });

      res.status(200).json({
          data: updatedRecord
      });
  } 
  catch(err){
        res.status(500).json({messsage: "internal server error", error: err});
    }
}

public async deleteRecord(req: Request<{ visitId: number }>, res: Response, next: NextFunction): Promise<void> {
  try {
    const visitId  = Number(req.params.visitId); 

    if (!visitId) {
      throw AppError.notFound("No pre-examination record found for the provided visit ID");
    }

    const deletedRecord = await PreExaminationModel.destroy({
      where: { visitId },
    });

    if (!deletedRecord) {
      throw AppError.badRequest("Failed to delete pre-examination record. Record not found.");
    }
    res.status(200).json({ message: "Pre-examination record deleted successfully" });

  } 
  catch(err){
        res.status(500).json({messsage: "internal server error", error: err});
    }
}

public async getAllPreExaminationRecords(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const preExaminationRecords = await PreExaminationModel.findAll();

    if (preExaminationRecords.length === 0) {
      res.status(404).json({ message: "No pre-examination records found" });
    }

    res.status(200).json(preExaminationRecords);
  } 
  catch(err){
        res.status(500).json({messsage: "internal server error", error: err});
    }
}






}
  
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
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    throw new AppError({
      message: errorMessage,
      statusCode: 500,
    }
    );
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
        // Log the error and send an internal server error response
        console.error(err); // Optional: for better error visibility during debugging
        res.status(500).json({ message: 'Internal server error', error: err });
    }
}

  // 
  public async getPreExaminationRecord(req: Request, res: Response, next: NextFunction){
    
  }

}
  
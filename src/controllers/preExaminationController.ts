import Redis from "ioredis"
import { PATIENT_QUEUE } from "../core/redis";
import { PatientService } from "../services/patientServices";
import { NextFunction } from "express";
import { PatientModel } from "../models/patientsModel";
import { AppError } from "../core/errors/custom.errors";
import { PatientEntity } from "../core/entities/patient.entities";


const redis = new Redis();

export class PreExaminationController{
  private patientService : PatientService;

  constructor(){
    this.patientService = new PatientService();
  }
   // preexamination
  public async ProceedToNextPateient(): Promise<PatientEntity>{
    try{const patientCardNumber = await redis.lpop(PATIENT_QUEUE);

    if (!patientCardNumber){
      throw AppError.notFound("No patient")
    }

    const patientDetail = await this.patientService.getPatientByCardNumber(patientCardNumber);
    return patientDetail;
  }catch(err){
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    throw new AppError({
      message: errorMessage,
      statusCode: 500,
    }
    );
  }
}
}

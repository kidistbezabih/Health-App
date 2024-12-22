import Redis from "ioredis"
import { PATIENT_QUEUE } from "../core/redis";
import { PatientService } from "../services/patientServices";
import { AppError } from "../core/errors/custom.errors";
import { PatientEntity } from "../core/entities/patient.entities";
import { PreExaminationModel } from "../models/preExaminationModel";
import { Request, Response, NextFunction } from "express";

const redis = new Redis();

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

    const patientDetail = await this.patientService.getPatientByCardNumber(patientCardNumber);
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
  public async recordPatientSymptoms(req: Request<{patientId: number }, PreExaminationModel>,  res: Response, next: NextFunction):Promise<void>{
    // get all patient information and then send to the database
    try{
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
    const {patientId} = req.params;

    if (!patientId){
      throw AppError.notFound("No patient with this id");
    }

    const patientSymptome = await PreExaminationModel.create({
      patientId,
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

    if (patientSymptome){
      res.status(201).json({message: "Patient symptome successfully added"})
    }else{
      throw AppError.badRequest("Fail to create patient symptome");
    }
    }catch(err){
      res.status(500).json({message: 'internal erver error', error: err})
    }
  }

  // 

}
  
import Redis from 'ioredis';
import { NextFunction, type Request, type Response } from 'express';
import { PatientModel } from '../models/patientModel'; 
import { error } from 'console';
import { AppError } from '../core/errors/custom.errors';
import { PatientEntity } from '../core/entities/patient.entities';
import { PATIENT_QUEUE } from '../core/redis';
import { PatientService } from '../services/patientServices';

interface GetAllRequestQuery {
  page:string;
  limit: string;
}

interface CreatePatientRequestBody{
  institutionId: number;
  cardNumber: string;
  name: string;
  age: number;
  sex: string;
  address: string;
  zone: string;
  kebele: string;
  phoneNumber: string;
}

interface UpdatePatientRequestBody{
  name: string;
  age: number;
  sex: string;
  address: string;
  zone: string;
  kebele: string;
  phoneNumber: string;

}

const redis = new Redis({
  host:process.env.REDIS_HOST,
  port:parseInt(process.env.REDIS_PORT || '6379') 

}
);
const REDIS_KEY = "patient_registration";

export class PatientController {
  private patientService: PatientService;

  constructor() {
    this.patientService = new PatientService();
  }

  // To register patient
  public async registePatient(req: Request<CreatePatientRequestBody>, res: Response, next: NextFunction): Promise<void>{
    try{
      const { institutionId,name, age, sex, address, zone, kebele, phoneNumber } = req.body;
      const today = new Date().toISOString().split("T")[0];

        console.log("before fetching from redis")
        const latestEntry = await redis.lindex(REDIS_KEY, -1);
        console.log("Data from Redis:", latestEntry);

        if (latestEntry) {
          try {
            const { date } = JSON.parse(latestEntry);
          } catch (parseError) {
            console.error("Invalid Redis data:", latestEntry, parseError);
            throw AppError.internalServer("Invalid data in Redis");
          }
        }
     

      // append todays  entry to reddis array
      const newEntry = { instId: institutionId, date: today}

      // generate card number 
      const count = await redis.llen(REDIS_KEY);
      const cardNumber = `${institutionId}/${today}/${count}`;
      
      await redis.rpush(REDIS_KEY, JSON.stringify(newEntry));
      
      const patient = await PatientModel.create({
        institutionId,
        cardNumber,
        name,
        age,
        sex,
        address,
        zone,
        kebele,
        phoneNumber
      });
      if (patient){
        res.status(201).json({message: "Patient registered successfully", cardNumber});
      }else{
        throw AppError.badRequest("Failed to Register patient")
      }
    } catch(err){
      next(err)
    }
  }

  // Find patient by their cardNumber
  public async getPatient(req: Request<{searchKey: string}>, res: Response<PatientEntity>, next: NextFunction): Promise< void> {
      try{
        const { searchKey } = req.params; // Extract cardNumber from URL params
  
      if (!searchKey) {
        throw AppError.notFound("can't find any patient by this card number")
      }
  
      // Find patient by card number
      const patient = await this.patientService.getPatient(searchKey);
      
      res.json(patient);
    }catch(err){
      next(err);
      }
  }
  
  public async updatePatientInfo(req: Request<{cardNumber: string}, UpdatePatientRequestBody>, res: Response<PatientEntity>, next: NextFunction):Promise<void>{
    const cardNumber = req.params;
    
    if (!cardNumber){
      throw AppError.notFound("Please isert the card number!")
    };

    const {
      name,
      age,
      sex,
      address,
      zone,
      kebele,
      phoneNumber,
    } = req.body; 
  
    const patient = await PatientModel.findOne({where: {cardNumber: cardNumber}})

    if (!patient){
      throw AppError.notFound("There is no patient with this card number");
    }

    patient.name = name;
    patient.age = age
    patient.sex = sex
    patient.address = address
    patient.zone = zone
    patient.kebele = kebele
    patient.phoneNumber = phoneNumber

    await patient.save();

    res.json(
      PatientEntity.fromDatabase(patient)
    );
  }

  public async addToPreExaminationQueue(cardNumber: string): Promise<void>{
    await redis.lpush(PATIENT_QUEUE, cardNumber)
  }

  public async deletePatientInfo(req: Request<{cardNumber: number}, UpdatePatientRequestBody>, res: Response<PatientEntity>, next: NextFunction):Promise<void>{
    const {cardNumber} = (req.params);
    
    if (!cardNumber){
      throw AppError.notFound("Please isert the card number!")
    };
    const patient = await this.patientService.deletePatien(cardNumber);

    if (!patient){
      throw AppError.notFound("There is no patient with this card number");
    }

    res.json(`Patient with card number ${cardNumber} deleted successfully `);
  }  
};


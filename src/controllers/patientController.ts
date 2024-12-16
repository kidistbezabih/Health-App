import Redis from 'ioredis';
import { NextFunction, type Request, type Response } from 'express';
import { PatientModel } from '../models/patientsModel';
import { error } from 'console';
import { AppError } from '../core/errors/custom.errors';
import { PatientEntity } from '../core/entities/patient.entities';
import { Model } from 'sequelize';

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

const redis = new Redis();
const REDIS_KEY = "patient_registration";

export class PatientController {

  // To register patient
  public async RegistePatient(req: Request<unknown, unknown,CreatePatientRequestBody>, res: Response, next: NextFunction): Promise<void>{
    try{
      const { institutionId,name, age, sex, address, zone, kebele, phoneNumber } = req.body;
      const today = new Date().toISOString().split("T")[0];

      const latestEntry = await redis.lindex(REDIS_KEY, -1);

      if (latestEntry){
        const {date} = JSON.parse(latestEntry);

        if (date !== today){
          await redis.del(REDIS_KEY);
        }
      }

      // append todays  entry to reddis array
      const newEntry = { instId: institutionId, date: today}

      
      // generate card number 
      const count = await redis.llen(REDIS_KEY);
      const cardNumber = `${institutionId}/${today}/${count}`;
      
      await redis.set(REDIS_KEY, JSON.stringify(newEntry));
      
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
        throw error("Failed to Register patient")
      }
    } catch(err){
      console.error(err)
      res.status(500).json({ message: 'Internal server error', error: err });
    }
  }

  // Find patient by their cardNumber
  public async GetPatientByCardNumber(req: Request<{cardNumber: string}, unknown, unknown>, res: Response<PatientEntity>, next: NextFunction): Promise<Response<PatientEntity>>{
      const { cardNumber } = req.params; // Extract cardNumber from URL params
  
      if (!cardNumber) {
        throw AppError.notFound("can't find any patient by this card number")
      }
  
      // Find patient by card number
      const patient = await PatientModel.findOne({
        where: {cardNumber}, 
        attributes: ['cardNumber', 'name', 'age','sex', 'address', 'zone', 'kebele', 'phoneNumber']
      });
  
      if (!patient) {
        throw AppError.notFound("can't find any patient by this cardd numberfi")
      }
  
      // Return  patient found 
      return res.json(PatientEntity.fromDatabase(patient));
  }
  
  public async UpdatePatientInfo(req: Request<{cardNumber: string}, UpdatePatientRequestBody>, res: Response<PatientEntity>, next: NextFunction):Promise<Response<PatientEntity>>{
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

    return res.json(
      PatientEntity.fromDatabase(patient)
  );
}};


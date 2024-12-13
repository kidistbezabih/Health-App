import Redis from 'ioredis';
import { NextFunction, type Request, type Response } from 'express';
import { PatientModel } from '../models/patientsModel';
import { json } from 'sequelize';
import { error } from 'console';

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

const redis = new Redis();
const REDIS_KEY = "patient_registration";

export class PatientController {
  async RegistePatient(req: Request<unknown, unknown,CreatePatientRequestBody>, res: Response, next: NextFunction): Promise<void>{
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

      await redis.set(REDIS_KEY, JSON.stringify(newEntry));


      // generate card number 
      const count = await redis.llen(REDIS_KEY);
      const cardNumber = `${institutionId}/${today}/${count}`;



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
}
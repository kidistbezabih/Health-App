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

        const formatedchiefComplaint = Array.isArray(chiefComplaint) ? chiefComplaint: chiefComplaint?.split(',').map((s: string) => s.trim());
        const formatedhpi = Array.isArray(hpi) ? hpi: hpi?.split(',').map((s: string) => s.trim());
        const formatedpastHx = Array.isArray(pastHx) ? pastHx: pastHx?.split(',').map((s: string) => s.trim());
        const formatedcurrentHealthStatus = Array.isArray(currentHealthStatus) ? currentHealthStatus: currentHealthStatus?.split(',').map((s: string) => s.trim());
        const formatedfamilyHx = Array.isArray(familyHx) ? familyHx: familyHx?.split(',').map((s: string) => s.trim());
        const formatedpsychologicalAndPersonalHx = Array.isArray(psychologicalAndPersonalHx) ? psychologicalAndPersonalHx: psychologicalAndPersonalHx?.split(',').map((s: string) => s.trim());
        const formatedgeneral = Array.isArray(general) ? general: general?.split(',').map((s: string) => s.trim());
        const formatedskin = Array.isArray(skin) ? skin: skin?.split(',').map((s: string) => s.trim());
        const formatedhead = Array.isArray(head) ? head: head?.split(',').map((s: string) => s.trim());
        const formatedeyes = Array.isArray(eyes) ? eyes: eyes?.split(',').map((s: string) => s.trim());
        const formatedear = Array.isArray(ear) ? ear: ear?.split(',').map((s: string) => s.trim());
        const formatedmouth = Array.isArray(mouth) ? mouth: mouth?.split(',').map((s: string) => s.trim());
        const formatedbreast = Array.isArray(breast) ? breast: breast?.split(',').map((s: string) => s.trim());
        const formatedrespiratory = Array.isArray(respiratory) ? respiratory: respiratory?.split(',').map((s: string) => s.trim());
        const formatedgastro = Array.isArray(gastro) ? gastro: gastro?.split(',').map((s: string) => s.trim());
        const formatedguneto = Array.isArray(guneto) ? guneto: guneto?.split(',').map((s: string) => s.trim());
        const formatedmeskal = Array.isArray(meskal) ? meskal: meskal?.split(',').map((s: string) => s.trim());
        const formatednervous = Array.isArray(nervous) ? nervous: nervous?.split(',').map((s: string) => s.trim());
        const formatedexaminedBy = Array.isArray(examinedBy) ? examinedBy: examinedBy?.split(',').map((s: string) => s.trim());

        // Create a new patient symptom record in the database
        const patientSymptom = await PreExaminationModel.create({
            visitId,
            chiefComplaint: formatedchiefComplaint,
            hpi: formatedhpi,
            pastHx: formatedpastHx,
            currentHealthStatus: formatedcurrentHealthStatus,
            familyHx: formatedfamilyHx,
            psychologicalAndPersonalHx: formatedpsychologicalAndPersonalHx,
            general: formatedgeneral,
            skin: formatedskin,
            head: formatedhead,
            eyes: formatedeyes,
            ear: formatedear,
            mouth: formatedmouth,
            breast: formatedbreast,
            respiratory: formatedrespiratory,
            gastro: formatedgastro,
            guneto: formatedguneto,
            meskal: formatedmeskal,
            nervous: formatednervous,
            examinedBy: formatedexaminedBy
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
          const id = Number(req.params.id);
          if (!id) {
              throw AppError.notFound("ID is required");
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
              where: { id }
          });
  
          if (!patientRecord) {
              throw AppError.notFound("No pre-examination record found for this ID");
          }
  
          const formattedData = {
              chiefComplaint: Array.isArray(chiefComplaint) ? chiefComplaint : chiefComplaint?.split(',').map((s: string) => s.trim()),
              hpi: Array.isArray(hpi) ? hpi : hpi?.split(',').map((s: string) => s.trim()),
              pastHx: Array.isArray(pastHx) ? pastHx : pastHx?.split(',').map((s: string) => s.trim()),
              currentHealthStatus: Array.isArray(currentHealthStatus) ? currentHealthStatus : currentHealthStatus?.split(',').map((s: string) => s.trim()),
              familyHx: Array.isArray(familyHx) ? familyHx : familyHx?.split(',').map((s: string) => s.trim()),
              psychologicalAndPersonalHx: Array.isArray(psychologicalAndPersonalHx) ? psychologicalAndPersonalHx : psychologicalAndPersonalHx?.split(',').map((s: string) => s.trim()),
              general: Array.isArray(general) ? general : general?.split(',').map((s: string) => s.trim()),
              skin: Array.isArray(skin) ? skin : skin?.split(',').map((s: string) => s.trim()),
              head: Array.isArray(head) ? head : head?.split(',').map((s: string) => s.trim()),
              eyes: Array.isArray(eyes) ? eyes : eyes?.split(',').map((s: string) => s.trim()),
              ear: Array.isArray(ear) ? ear : ear?.split(',').map((s: string) => s.trim()),
              mouth: Array.isArray(mouth) ? mouth : mouth?.split(',').map((s: string) => s.trim()),
              breast: Array.isArray(breast) ? breast : breast?.split(',').map((s: string) => s.trim()),
              respiratory: Array.isArray(respiratory) ? respiratory : respiratory?.split(',').map((s: string) => s.trim()),
              gastro: Array.isArray(gastro) ? gastro : gastro?.split(',').map((s: string) => s.trim()),
              guneto: Array.isArray(guneto) ? guneto : guneto?.split(',').map((s: string) => s.trim()),
              meskal: Array.isArray(meskal) ? meskal : meskal?.split(',').map((s: string) => s.trim()),
              nervous: Array.isArray(nervous) ? nervous : nervous?.split(',').map((s: string) => s.trim()),
              examinedBy: Array.isArray(examinedBy) ? examinedBy : examinedBy?.split(',').map((s: string) => s.trim())
          };
  
          const updatedRecord = await patientRecord.update(formattedData);
  
          res.status(200).json({
              message: "Pre-examination record successfully updated",
              data: updatedRecord
          });
      } catch (err) {
          res.status(500).json({ message: "Internal server error", error: err });
      }
  }
  

public async deleteRecord(req: Request<{ id: number }>, res: Response, next: NextFunction): Promise<void> {
  try {
    const id  = Number(req.params.id); 

    if (!id) {
      throw AppError.notFound("No pre-examination record found for the provided visit ID");
    }

    const deletedRecord = await PreExaminationModel.destroy({
      where: { id },
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
  
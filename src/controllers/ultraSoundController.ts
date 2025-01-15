import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/custom.errors";
import { UltraSoundService } from "../services/ultrasoundServices";

export class UltraSoundController{

  private ultraSoundService : UltraSoundService;

  constructor(){
    this.ultraSoundService = new UltraSoundService();
    this.createUltraSound = this.createUltraSound.bind(this);
    this.getPatientUltraSound = this.getPatientUltraSound.bind(this);
    this.updateUltraSound = this.updateUltraSound.bind(this);
    this.getAllUltraSound = this.getAllUltraSound.bind(this);
    this.deletePatientultraSound = this.deletePatientultraSound.bind(this);
  }

  public async createUltraSound(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        examType,
        notes,
        imageFilePath,
        findings,
        diagnosis,
        technician
      } = req.body;

      const ultrasound = await this.ultraSoundService.createUltraSound(
        examType,
        notes,
        imageFilePath,
        findings,
        diagnosis,
        technician
      );

      if (!ultrasound){
        throw AppError.badRequest;
      }
       res.status(201).json({message: "Patient record successfully added", ultrasound});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getPatientUltraSound(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const ultrasound = await this.ultraSoundService.getUltraSound(id);
      if (!ultrasound){
        throw AppError.badRequest
      }
      res.json(ultrasound)  
    }catch(err){
      res.status(500).json("Internal Server error!");
    }
  }

  public async getAllUltraSound(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const ultrasounds = await this.ultraSoundService.getAllUltraSound();
      if (!ultrasounds){
        AppError.notFound
      }
      res.status(200).json({
        data: ultrasounds,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async updateUltraSound(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {
        examType,
        notes,
        imageFilePath,
        findings,
        diagnosis,
        technician,
      } = req.body;
     
      const id = Number(req.params.id);
      const ultrasounds = await this.ultraSoundService.updateUltraSound(
        id,
        examType,
        notes,
        imageFilePath,
        findings,
        diagnosis,
        technician
      );

      if (!ultrasounds){
        throw AppError.badRequest;
      }
      res.status(200).json({
        data: ultrasounds,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!", error});
    }
  }

  public async deletePatientultraSound(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const deletedCount = await this.ultraSoundService.deleteUltraSound(id);

      if (!deletedCount){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }catch (error) {
      res.status(500).json({message: "internal server error!", error});
    }
  }
};
import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/custom.errors";
import { ReferralService } from "../services/referralServices";

export class ReferralController{

   private referralService = new ReferralService;

  constructor(){
    this.referralService = new ReferralService();
    this.createReferral = this.createReferral.bind(this);
    this.deleteReferral = this.deleteReferral.bind(this);
    this.getAllReferral = this.getAllReferral.bind(this);
    this.getReferral = this.getReferral.bind(this);
    this.updateReferral = this.updateReferral.bind(this);
  }

  public async createReferral(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        to,
        Hx,
        P_E,
        IX,
        diagnosis,
        treatmentGiven,
        reasonForReferral,
        physician
      } = req.body;
      
      const patientId = Number(req.params.patientId);
      const referral = await this.referralService.createReferral(
        patientId,
        to,
        Hx,
        P_E,
        IX,
        diagnosis,
        treatmentGiven,
        reasonForReferral,
        physician,
      );

      if (!referral){
        throw AppError.notFound;
      }
       res.status(201).json({message: "Patient record successfully added"});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getReferral(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const referral = await this.referralService.getReferral(id);
      if (!referral){
        AppError.notFound
      }
      res.json(referral)  
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getAllReferral(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const referrals = await this.referralService.getAllReferral();

      res.status(200).json({
        data: referrals,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async updateReferral(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const {
        to,
        Hx,
        P_E,
        IX,
        diagnosis,
        treatmentGiven,
        reasonForReferral,
        physician,
      }= req.body;

      const id = Number(req.params.id);
      
      const referrals = await this.referralService.updateReferral(
        id,
        to,
        Hx,
        P_E,
        IX,
        diagnosis,
        treatmentGiven,
        reasonForReferral,
        physician,
      );

      res.status(200).json({
        data: referrals,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async deleteReferral(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const deletedCount = await this.referralService.deleteReferral(id);

      if (!deletedCount){
        throw AppError.notFound;
      }
      res.status(200).json({message: "Deleted successfully!"})
    }catch(err){
      res.status(500).json('Internal server error!')
    }
  }
};
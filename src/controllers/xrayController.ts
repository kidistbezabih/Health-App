import { NextFunction, Request, Response } from "express";
import { AppError } from "../core/errors/custom.errors";
import { XrayService } from "../services/xrayServices";

export class XrayController{

   private xrayService = new XrayService();

  constructor(){
    this.xrayService = new XrayService();
    this.createXray = this.createXray.bind(this);
    this.getAllXray = this.getAllXray.bind(this);
    this.getXray = this.getXray.bind(this);
    this.updateXray = this.updateXray.bind(this);
    this.deleteXray = this.deleteXray.bind(this);
  }

  public async createXray(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        bodyPart,
        exposureSettings,
        imageFilePath,
        findings,
        diagnosis,
        technician
      } = req.body;

      const xrayResult = await this.xrayService.createXray(
        bodyPart,
        exposureSettings,
        imageFilePath,
        findings,
        diagnosis,
        technician,
      );

      if (!xrayResult){
        throw AppError.notFound;
      }
       res.status(201).json({message: "Patient xray record successfully added"});
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getXray(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const xrayResult = await this.xrayService.getXray(id);
      if (!xrayResult){
        AppError.notFound
      }
      res.json(xrayResult);
    }catch(err){
    res.status(500).json({messsage: "internal server error", error: err})
    }
  }

  public async getAllXray(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const xrayResults = await this.xrayService.getAllXrays();
      console.log(xrayResults)
      if(!xrayResults){
        AppError.notFound;
      }
      res.status(200).json({
        data: xrayResults,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async updateXray(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const {
        bodyPart,
        exposureSettings,
        imageFilePath,
        findings,
        diagnosis,
        technician
      }= req.body;
      const id = Number(req.params.id)
      
      const xrayResults = await this.xrayService.updateXray(
        id,
        bodyPart,
        exposureSettings,
        imageFilePath,
        findings,
        diagnosis,
        technician,
      );

      res.status(200).json({
        data: xrayResults,
      });
    } catch (error) {
      res.status(500).json({message: "internal server error!"});
    }
  }

  public async deleteXray(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const deletedCount = await this.xrayService.deleteXray(id);

      if (!deletedCount){
        throw AppError.notFound("No examination reuslt with this id!")
      }
      res.status(200).json({message: "Deleted successfully!"})
    }
    catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }
  }
};
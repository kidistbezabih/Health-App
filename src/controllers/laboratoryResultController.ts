
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { LaboratoryResultService } from "../services/laboratoryResultServices";
import { LaboratoryResultEntity } from "../core/entities/laboratoryResult.entities";
import { LaboratoryResultModel } from "../models/laboratoryResultModel";

export class LaboratoryResultController{
  private labResultServices : LaboratoryResultService;

  constructor(){
    this.labResultServices = new LaboratoryResultService();
    this.createLaboratoryResult = this.createLaboratoryResult.bind(this);
    this.getLaboratoryResult = this.getLaboratoryResult.bind(this);
    this.updateLaboratoryResult = this.updateLaboratoryResult.bind(this);
    this.deleteLaboratoryResult = this.deleteLaboratoryResult.bind(this);
  };

  public async createLaboratoryResult(req: Request<LaboratoryResultEntity>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        visitId,
        wbc,
        Hgn,
        ESR,
        BF,
        bloodGroup_RHType,
        bloodMorphology,
        neutrophil,
        eosinophil,
        lymphocyte,
        monocyte,
        Basophil,
        FBS_RBS,
        sgot,
        sgpt,
        totalProtien,
        albumin,
        glucose,
        ketone,
        blood,
        leukocyte,
        bilirubin,
        urobilin,
        PH,
        microscopic,
        widal,
        weilFelix,
        VDHL_EPR,
        Rf,
        HBsAg,
        Aso,
        PICT,
        HCV,
        wetMount,
        gramStain,
        AFBStain,
        pregnancyTest,
        KOH,
        SKINSmear,
        protein,
        WBC,
        DiffCount,
        stoolExam,
        HIV,
        xRay,
        ultraSound,
      } = req.body;

      const result = await this.labResultServices.createLaboratoryResult(
        visitId,
        wbc,
        Hgn,
        ESR,
        BF,
        bloodGroup_RHType,
        bloodMorphology,
        neutrophil,
        eosinophil,
        lymphocyte,
        monocyte,
        Basophil,
        FBS_RBS,
        sgot,
        sgpt,
        totalProtien,
        albumin,
        glucose,
        ketone,
        blood,
        leukocyte,
        bilirubin,
        urobilin,
        PH,
        microscopic,
        widal,
        weilFelix,
        VDHL_EPR,
        Rf,
        HBsAg,
        Aso,
        PICT,
        HCV,
        wetMount,
        gramStain,
        AFBStain,
        pregnancyTest,
        KOH,
        SKINSmear,
        protein,
        WBC,
        DiffCount,
        stoolExam,
        HIV,
        xRay,
        ultraSound,
      );

      if(!result){
        throw AppError.badRequest("Un able to create laboratory result!");
      }

      res.json({"Laboratory result is successfully created!": result})
    }catch(err){
      res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getLaboratoryResult(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const result = await this.labResultServices.getlabResult(id);

      if (!result){
        AppError.badRequest
      } 
      res.status(201).json(result)
    }catch(err){
      res.status(500).json('internal server error!')
    }
  }

  public async getAllLaboratoryResults(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{

      const result = await LaboratoryResultModel.findAll();

      if (!result){
        AppError.badRequest
      }
      res.status(201).json(result)
  }catch(err){
    res.status(500).json('Internal server error!')
  }}

public async updateLaboratoryResult(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
        wbc,
        Hgn,
        ESR,
        BF,
        bloodGroup_RHType,
        bloodMorphology,
        neutrophil,
        eosinophil,
        lymphocyte,
        monocyte,
        Basophil,
        FBS_RBS,
        sgot,
        sgpt,
        totalProtien,
        albumin,
        glucose,
        ketone,
        blood,
        leukocyte,
        bilirubin,
        urobilin,
        PH,
        microscopic,
        widal,
        weilFelix,
        VDHL_EPR,
        Rf,
        HBsAg,
        Aso,
        PICT,
        HCV,
        wetMount,
        gramStain,
        AFBStain,
        pregnancyTest,
        KOH,
        SKINSmear,
        protein,
        WBC,
        DiffCount,
        stoolExam,
        HIV,
        xRay,
        ultraSound,
      } = req.body;
      const id = Number(req.params.id)

      const Result = await this.labResultServices.updatelabResult(
        id,
        wbc,
        Hgn,
        ESR,
        BF,
        bloodGroup_RHType,
        bloodMorphology,
        neutrophil,
        eosinophil,
        lymphocyte,
        monocyte,
        Basophil,
        FBS_RBS,
        sgot,
        sgpt,
        totalProtien,
        albumin,
        glucose,
        ketone,
        blood,
        leukocyte,
        bilirubin,
        urobilin,
        PH,
        microscopic,
        widal,
        weilFelix,
        VDHL_EPR,
        Rf,
        HBsAg,
        Aso,
        PICT,
        HCV,
        wetMount,
        gramStain,
        AFBStain,
        pregnancyTest,
        KOH,
        SKINSmear,
        protein,
        WBC,
        DiffCount,
        stoolExam,
        HIV,
        xRay,
        ultraSound,
      );

      if (!Result){
        AppError.badRequest;
      }
      res.json(Result);
    } catch(err){
      res.status(500).json("internal server error!")
  }}

  public async deleteLaboratoryResult(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const Result = await this.labResultServices.deletelabResult(id);

      if (!Result){
        AppError.badRequest("No laboratory result with this id!")
      }
      res.status(201).json("Laboratory result is deleted successfully")
  }catch(err){
    res.status(500).json('Internal server error!')
  }};
}
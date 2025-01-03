
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { LaboratoryResultService } from "../services/laboratoryResultServices";
import { LaboratoryResultEntity } from "../models/entities/laboratoryResult.entities";

export class LaboratoryResultController{
  private labResultServices : LaboratoryResultService;

  constructor(){
    this.labResultServices = new LaboratoryResultService();
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
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

      const result = this.labResultServices.createLaboratoryResult(
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
        AppError.badRequest("un able to create anlab result!");
      }

      res.status(201).json("Laboratory result is successfully created!")
    }catch(err){
    next(err);
    }
  }


  public async getLaboratoryResult(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const result = this.labResultServices.getlabResult(id);

      if (!result){
        AppError.badRequest("No laboratory Result with this id!")
      }
      res.status(201).json({lab_Result: {result}})
  }catch(err){
    next(err)
  }}


public async updateLaboratoryResult(req: Request<{
  id: number,
  wbc: string,
  Hgn: string,
  ESR: string,
  BF: string,
  bloodGroup_RHType: string,
  bloodMorphology: string,
  neutrophil: string,
  eosinophil: string,
  lymphocyte: string,
  monocyte: string,
  Basophil: string,
  FBS_RBS: string,
  sgot: string,
  sgpt: string,
  totalProtien: string,
  albumin: string,
  glucose: string,
  ketone: string,
  blood: string,
  leukocyte: string,
  bilirubin: string,
  urobilin: string,
  PH: string,
  microscopic: string,
  widal: string,
  weilFelix: string,
  VDHL_EPR: string,
  Rf: string,
  HBsAg: string,
  Aso: string,
  PICT: string,
  HCV: string,
  wetMount: string,
  gramStain: string,
  AFBStain: string,
  pregnancyTest: string,
  KOH: string,
  SKINSmear: string,
  protein: string,
  WBC: string,
  DiffCount: string,
  stoolExam: string,
  HIV: string,
  xRay: number,
  ultraSound: number,

}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {
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
      } = req.params;

      const Result = this.labResultServices.updatelabResult(
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
        AppError.badRequest("No laboratory result with this id!")
      }
      res.status(201).json("Laboratory result is updated successfully!")
  }catch(err){
    next(err)
  }}


  public async deleteaboratoryResult(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const Result = this.labResultServices.deletelabResult(id);

      if (!Result){
        AppError.badRequest("No laboratory result with this id!")
      }
      res.status(201).json("Laboratory result is deleted successfully")
  }catch(err){
    next(err)
  }}

}
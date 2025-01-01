
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { LaboratoryOrderService } from "../services/laboratoryOrderService";

export class LaboratoryOrderController{
  private labOrderServices : LaboratoryOrderService;

  constructor(){
    this.labOrderServices = new LaboratoryOrderService();
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async createLaboratoryOrder(req: Request<laboratoryOrderEntity>, res: Response, next: NextFunction): Promise<void>{
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
        totalProtein,
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
        WeilFelix,
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
        ultrasound,
        
      } = req.body;

      const order = this.labOrderServices.createLaboratoryOrder(
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
        totalProtein,
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
        WeilFelix,
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
        ultrasound,
      );

      if(!order){
        AppError.badRequest("un able to create anlab order!");
      }

      res.status(201).json("Laboratory order is successfully created!")
    }catch(err){
    next(err);
    }
  }


  public async getLaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const order = this.labOrderServices.getLabOrder(id);

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json({lab_order: {order}})
  }catch(err){
    next(err)
  }}


public async updateLaboratoryOrder(req: Request<{
  id: number,
  wbc: boolean,
  Hgn: boolean,
  ESR: boolean,
  BF: boolean,
  bloodGroup_RHType: boolean,
  bloodMorphology: boolean,
  neutrophil: boolean,
  eosinophil: boolean,
  lymphocyte: boolean,
  monocyte: boolean,
  Basophil: boolean,
  FBS_RBS: boolean,
  sgot: boolean,
  sgpt: boolean,
  totalProtein: boolean,
  albumin: boolean,
  glucose: boolean,
  ketone: boolean,
  blood: boolean,
  leukocyte: boolean,
  bilirubin: boolean,
  urobilin: boolean,
  PH: boolean,
  microscopic: boolean,
  widal: boolean,
  WeilFelix: boolean,
  VDHL_EPR: boolean,
  Rf: boolean,
  HBsAg: boolean,
  Aso: boolean,
  PICT: boolean,
  HCV: boolean,
  wetMount: boolean,
  gramStain: boolean,
  AFBStain: boolean,
  pregnancyTest: boolean,
  KOH: boolean,
  SKINSmear: boolean,
  protein: boolean,
  WBC: boolean,
  DiffCount: boolean,
  stoolExam: boolean,
  HIV: boolean,
  xRay: boolean,
  ultrasound: boolean,

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
        totalProtein,
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
        WeilFelix,
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
        ultrasound,
      } = req.params;

      const order = this.labOrderServices.updateLabOrder(
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
        totalProtein,
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
        WeilFelix,
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
        ultrasound,
      );

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json("Laboratory order is updated successfully!")
  }catch(err){
    next(err)
  }}


  public async deleteaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const {id} = req.params;

      const order = this.labOrderServices.deleteLabOrder(id);

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json("Laboratory order is deleted successfully")
  }catch(err){
    next(err)
  }}

}
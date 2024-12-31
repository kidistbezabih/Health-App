
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { ExaminationModel } from "../models/examinationModel";
import { PreExaminationService } from "../services/preExaminationServices";
import { VisitService } from "../services/visitServices";
import { ExaminationService } from "../services/examinationServices";
import { LaboratoryOrderService } from "../services/laboratoryOrderService";

export class laboratoryOrderController{
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

      // if (!order){
      //   AppError.
      // }
      
  }catch(err){
    next(err)
  }}


}
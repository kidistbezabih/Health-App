
import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors/custom.errors";
import { LaboratoryOrderService } from "../services/laboratoryOrderServices";
import { LaboratoryOrderEntity } from "../core/entities/laboratoryOrder.entities";
import { LaboratoryOrderModel } from "../models/laboratoryOrderModel";

export class LaboratoryOrderController{
  private labOrderService : LaboratoryOrderService;

  constructor(){
    this.labOrderService = new LaboratoryOrderService();
    this.createLaboratoryOrder = this.createLaboratoryOrder.bind(this);
    this.updateLaboratoryOrder = this.updateLaboratoryOrder.bind(this);
    this.getLaboratoryOrder = this.getLaboratoryOrder.bind(this);
    this.deleteaboratoryOrder = this.deleteaboratoryOrder.bind(this);
  }

  //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
  public async createLaboratoryOrder(req: Request<LaboratoryOrderEntity>, res: Response, next: NextFunction): Promise<void>{
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

      const order = this.labOrderService.createLaboratoryOrder(
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

      const order =await this.labOrderService.getLabOrder(id);

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json(order);
  }catch(err){
    next(err)
  }}


public async updateLaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
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

      const {id} = req.params;

      const order = this.labOrderService.updateLabOrder(
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

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json("Laboratory order is updated successfully!")
  }catch(err){
    next(err)
  }}


  public async deleteaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const order = this.labOrderService.deleteLabOrder(id);

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json("Laboratory order is deleted successfully")
  }catch(err){
    next(err)
  }}


public async getAllLaboratoryOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const laboratoryOrders = await LaboratoryOrderModel.findAll();
    
    if (!laboratoryOrders || laboratoryOrders.length === 0) {
      res.status(404).json({ message: 'No laboratory orders found' });
    }

    res.status(200).json({
      data: laboratoryOrders
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
} 
}
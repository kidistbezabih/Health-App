
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

      const order = await this.labOrderService.createLaboratoryOrder(
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
          res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async getLaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void> {
    try {
        const {id} = req.params;

        // Retrieve the laboratory order
        const order = await this.labOrderService.getLabOrder(id);

        // Handle case if no order is found
        if (!order) {
            throw AppError.badRequest("No laboratory order with this id!");
        }

        // Filter only properties that have a true value
        const trueValues = Object.fromEntries(
            Object.entries(order).filter(([key, value]) => value === true)
        );

        // Respond with the filtered values
        res.status(200).json(trueValues);
    } catch (err) {
        res.status(500).json({message: "Internal server error", error: err});
    }
}


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
        res.status(500).json({messsage: "internal server error", error: err})
    }
  }


  public async deleteaboratoryOrder(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
    try{
      const id = Number(req.params.id);

      const order = this.labOrderService.deleteLabOrder(id);

      if (!order){
        AppError.badRequest("No laboratory order with this id!")
      }
      res.status(201).json("Laboratory order is deleted successfully")
  }
  catch(err){
        res.status(500).json({messsage: "internal server error", error: err})
    }
}


public async getAllLaboratoryOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
      // Fetch all laboratory orders
      const laboratoryOrders = await LaboratoryOrderModel.findAll();

      // Check if no laboratory orders are found
      if (!laboratoryOrders || laboratoryOrders.length === 0) {
          throw res.status(404).json({ message: 'No laboratory orders found' });
      }

      // Convert each Sequelize instance to a plain object and filter properties with true value
      const trueValuesOrders = laboratoryOrders.map(order => {
          // Get plain object from Sequelize instance
          const plainOrder = order.get();

          // Filter only properties that have a true value
          const filteredOrder = Object.fromEntries(
              Object.entries(plainOrder).filter(([key, value]) => value === true)
          );

          return filteredOrder;
      });

      // Respond with the filtered orders
      res.status(200).json({
          data: trueValuesOrders
      });
  } catch (error) {
      res.status(500).json({
          message: 'Internal server error',
      });
  }
}
}
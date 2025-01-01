import { Router } from "express";
import { LaboratoryOrderController } from "../controllers/laboratoryOrderController";

export class LaboratoryOrderRoute {
  static get routes(): Router {
    const router = Router();
    const laboratoryOrderController = new LaboratoryOrderController();

    router.post('/create-lab-order', laboratoryOrderController.createLaboratoryOrder);
    router.get('/get-lab-order/:id', laboratoryOrderController.getLaboratoryOrder);
    router.get('/upate-lab-order/:id', laboratoryOrderController.getLaboratoryOrder);
    router.get('/delete-lab-order/:id', laboratoryOrderController.deleteaboratoryOrder);

    return router;
  }
}
import { Router } from "express";
import { LaboratoryOrderController } from "../controllers/laboratoryOrderController";

export class LaboratoryOrderRoute {
  static get routes(): Router {
    const router = Router();
    const laboratoryOrderController = new LaboratoryOrderController();

    router.post('/create-lab-order/:visitId', laboratoryOrderController.createLaboratoryOrder);
    router.get('/get-lab-order/:id', laboratoryOrderController.getLaboratoryOrder);
    router.get('/get-all-lab-orders', laboratoryOrderController.getAllLaboratoryOrders);
    router.put('/update-lab-order/:id', laboratoryOrderController.updateLaboratoryOrder);
    router.delete('/delete-lab-order/:id', laboratoryOrderController.deleteaboratoryOrder);

    return router;
  }
}
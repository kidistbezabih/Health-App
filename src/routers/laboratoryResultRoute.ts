import { Router } from "express";
import { LaboratoryResultController } from "../controllers/laboratoryResultController";

export class LaboratoryResultRoute {
  static get routes(): Router {
    const router = Router();
    const laboratoryResultController = new LaboratoryResultController();

    router.post('/create-lab-result', laboratoryResultController.createLaboratoryResult);
    router.get('/get-lab-result/:id', laboratoryResultController.getLaboratoryResult);
    router.get('/upate-lab-result/:id', laboratoryResultController.getLaboratoryResult);
    router.get('/delete-lab-result/:id', laboratoryResultController.deleteaboratoryResult);

    return router;
  }
}
import { Router } from "express";
import { LaboratoryResultController } from "../controllers/laboratoryResultController";

export class LaboratoryResultRoute {
  static get routes(): Router {
    const router = Router();
    const laboratoryResultController = new LaboratoryResultController();

    router.post('/create-lab-result', laboratoryResultController.createLaboratoryResult);
    router.get('/get-lab-result/:id', laboratoryResultController.getLaboratoryResult);
    router.get('/get-all-lab-results', laboratoryResultController.getAllLaboratoryResults);
    router.put('/update-lab-result/:id', laboratoryResultController.updateLaboratoryResult);
    router.delete('/delete-lab-result/:id', laboratoryResultController.deleteLaboratoryResult);

    return router;
  }
}
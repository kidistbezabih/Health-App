import { Router } from "express";
import { InstutitionController } from "../controllers/institutionControllers";

export class VisitRoute {
  static get routes(): Router {
    const router = Router();
    const institutionController = new InstutitionController;

    router.post('/register-institution', institutionController.registerInstitution);
    router.get('/get-institution-by-id', institutionController.getInstitutionById);
    router.get('/update-institution', institutionController.updateInstitutionById);
    router.get('/delete-institution', institutionController.deleteInstitution);
    return router;
  }
}
  
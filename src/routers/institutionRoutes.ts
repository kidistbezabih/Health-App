import { Router } from "express";
import { InstutitionController } from "../controllers/institutionControllers";

export class InstitutionRoute {
  static get routes(): Router {
    const router = Router();
    const institutionController = new InstutitionController;

    router.post('/register-institution', institutionController.registerInstitution);
    router.get('/get-institutions', institutionController.getInstitutions);
    router.get('/get-institution-by-id/:id', institutionController.getInstitutionById);
    router.put('/update-institution/:id', institutionController.updateInstitutionById);
    router.delete('/delete-institution/:id', institutionController.deleteInstitution);
    return router;
  }
}
  
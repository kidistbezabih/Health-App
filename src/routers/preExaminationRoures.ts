import { Router } from "express";
import { PreExaminationController } from "../controllers/preExaminationController";
import { PreExaminationValidator } from "../validators/preExaminationValidator";

export class PreExaminationRoute {
  static get routes(): Router {
    const router = Router();
    const preExaminationController = new PreExaminationController();

    router.post('/record-patient-symptomes/:visitId', PreExaminationValidator.onCreate(), preExaminationController.recordPatientSymptoms);
    router.get('/next-patient' ,preExaminationController.ProceedToNextPateient);
    return router;
  }
}


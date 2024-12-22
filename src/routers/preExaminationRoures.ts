import { Router } from "express";
import { PreExaminationController } from "../controllers/preExaminationController";
import { PreExaminationValidator } from "../validators/preExaminationValidator";

export class PreExaminationRoute {
  static get routes(): Router {
    const router = Router();
    const preExaminationController = new PreExaminationController();

    router.get('/next-patient' ,preExaminationController.ProceedToNextPateient);
    router.post('/record-patient-symptomes', PreExaminationValidator.onCreate(), preExaminationController.recordPatientSymptoms);
    return router;
  }
}


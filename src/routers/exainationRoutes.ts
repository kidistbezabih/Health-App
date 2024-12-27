import { Router } from "express";
import { ExaminationController } from "../controllers/examinationController";

export class ExaminationRoute {
  static get routes(): Router {
    const router = Router();
    const examinationController = new ExaminationController();

    router.post('/add-examination-record', examinationController.addExaminationRecord);
    // router.get('/get-visit-history/:patientId', examinationController.getPatientVisitHistory);
    router.get('/get-patient-examination -record/:patientId', examinationController.getPatientPreExaminationRecord);
    router.get('/delete-examination', examinationController.deletePatientExamination);

    return router;
  }
}
  
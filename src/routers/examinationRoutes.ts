import { Router } from "express";
import { ExaminationController } from "../controllers/examinationController";

export class ExaminationRoute {
  static get routes(): Router {
    const router = Router();
    const examinationController = new ExaminationController();

    router.post('/add-examination-record/:visitId', examinationController.addExaminationRecord);
    router.get('/get-patient-examination-record/:visitId', examinationController.getPatientExaminationRecord);
    router.get('/get-all-examination-record', examinationController.getAllExaminations);
    router.delete('/delete-examination-record/:id', examinationController.deletePatientExamination);

    return router;
  }
}
  
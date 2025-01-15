import { Router } from "express";
import { VisitController } from "../controllers/visitController";

export class VisitRoute {
  static get routes(): Router {
    const router = Router();
    const visitController = new VisitController();

    router.post('/create/:patientId', visitController.createVisit);
    router.get('/all-visits', visitController.getAllVisits);
    router.get('/patient-visit-history/:patientId', visitController.getPatientVisitHistory);
    router.delete('/delete/:id', visitController.deleteVisit);
    return router;
  }
}
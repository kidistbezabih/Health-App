import { Router } from "express";
import { VisitController } from "../controllers/visitController";
import { AuthMiddleware } from "../middlewares/auth";

export class VisitRoute {
  static get routes(): Router {
    const router = Router();
    const visitController = new VisitController();
    const auth = new AuthMiddleware();

    router.post('/create/:patientId', visitController.createVisit);
    router.get('/all-visits',auth.validateJWT, visitController.getAllVisits);
    router.get('/patient-visit-history/:patientId', visitController.getPatientVisitHistory);
    router.delete('/delete/:id', visitController.deleteVisit);
    return router;
  }
}
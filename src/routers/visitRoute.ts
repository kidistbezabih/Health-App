import { Router } from "express";
import { VisitController } from "../controllers/visitController";

export class VisitRoute {
  static get routes(): Router {
    const router = Router();
    const visitController = new VisitController();

    router.post('/create-visit', visitController.createVisit);
    router.get('/delete-visit', visitController.deleteVisit);
    return router;
  }
}
  
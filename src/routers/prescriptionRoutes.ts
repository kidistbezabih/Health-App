import { Router } from "express";
import { PrescriptionController } from "../controllers/prescriptionControllers";

export class PrescriptioinRoute {
  static get routes(): Router {
    const router = Router();
    const prescriptionController = new PrescriptionController();

    router.post('/create-lprescription', prescriptionController.createPrescription);
    router.get('/get-prescription/:id', prescriptionController.getPrescription);
    router.get('/upate-prescription/:id', prescriptionController.updatePrescription);
    router.get('/delete-prescription/:id', prescriptionController.deletePrescrition);

    return router;
  }
}
import { Router } from "express";
import { PrescriptionController } from "../controllers/prescriptionControllers";

export class PrescriptioinRoute {
  static get routes(): Router {
    const router = Router();
    const prescriptionController = new PrescriptionController();

    router.post('/create-prescription', prescriptionController.createPrescription);
    router.get('/get-prescription/:id', prescriptionController.getPrescription);
    router.get('/get-all-prescriptions', prescriptionController.getAllPrescription);
    router.put('/update-prescription/:id', prescriptionController.updatePrescription);
    router.delete('/delete-prescription/:id', prescriptionController.deletePrescrition);

    return router;
  }
}
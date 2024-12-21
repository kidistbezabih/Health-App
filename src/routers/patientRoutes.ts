import { Router } from "express";
import { PatientController } from "../controllers/patientController";

export class PatientRoute {
  static get routes(): Router {
    const router = Router();
    const patientController = new PatientController();

    router.post('/register-patient', patientController.registePatient);
    router.get('/patient-by-card-number/:cardNumber', patientController.getPatientByCardNumber);
    router.get('/patient-by-phone-number/:phoneNumber', patientController.getPatientByPhoneNumber);
    router.get('/patient-by-name/:name', patientController.getPatientByName);
    router.put('/patient-update/', patientController.updatePatientInfo);

    return router;
  }
}

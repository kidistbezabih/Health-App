import { Router } from "express";
import { PatientController } from "../controllers/patientController";
import { PatientValidator } from "../validators/patientValidators";

export class PatientRoute {
  static get routes(): Router {
    const router = Router();
    const patientController = new PatientController();

    router.post('/register-patient' , PatientValidator.onCreate(), patientController.registePatient);
    router.get('/patient-by-card-number/:cardNumber', patientController.getPatientByCardNumber);
    router.get('/patient-by-phone-number/:phoneNumber', patientController.getPatientByPhoneNumber);
    router.get('/patient-by-name/:name', patientController.getPatientByName);
    router.put('/patient-update/', PatientValidator.onUpdate(), patientController.updatePatientInfo);

    return router;
  }
}
  
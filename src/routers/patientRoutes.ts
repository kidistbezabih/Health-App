import { Router } from "express";
import { PatientController } from "../controllers/patientController";
import { PatientValidator } from "../validators/patientValidators";

export default class PatientRoute {
  static get routes(): Router {
    const router = Router();
    const patientController = new PatientController();

    router.post('/register-patient' , PatientValidator.onCreate(), patientController.registePatient);
    router.get('/get-patient/:searchkey', patientController.getPatient);
    router.put('/update-patient/', PatientValidator.onUpdate(), patientController.updatePatientInfo);
    router.put('/delete-patient/', PatientValidator.onUpdate(), patientController.deletePatientInfo);

    return router;
  }
}
  
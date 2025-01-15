import { Router } from "express";
import { PatientController } from "../controllers/patientController";
import { PatientValidator } from "../validators/patientValidators";

export default class PatientRoute {
  static get routes(): Router {
    const router = Router();
    const patientController = new PatientController();

    router.post('/register-patient' , PatientValidator.onCreate(), patientController.registePatient);
    router.get('/search/:searchkey', patientController.getPatient);
    router.get('/get-all', patientController.getAllPatients);
    router.put('/update/:cardNumber', PatientValidator.onUpdate(), patientController.updatePatientInfo);
    router.delete('/delete/:id', PatientValidator.onUpdate(), patientController.deletePatientInfo);

    return router;
  }
}
  
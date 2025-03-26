import { Router } from "express";
import { PatientController } from "../controllers/patientController";
import { PatientValidator } from "../validators/patientValidators";
import { AllowedRolesMiddleware } from "../middlewares/allowRole";
import { AuthMiddleware } from "../middlewares/auth";

export default class PatientRoute {
  static get routes(): Router {
    const router = Router();
    const patientController = new PatientController();
    const allowedRoles = new AllowedRolesMiddleware();
    const auth = new AuthMiddleware();

    router.post('/register-patient' ,auth.validateJWT, allowedRoles.check(['reception', 'admin']), PatientValidator.onCreate(), patientController.registePatient);
    router.get('/search/:searchkey',auth.validateJWT, allowedRoles.check(['reception', 'admin']), patientController.getPatient);
    router.get('/get-all', auth.validateJWT, allowedRoles.check(['reception', 'admin']), patientController.getAllPatients);
    router.put('/update/:cardNumber', auth.validateJWT, allowedRoles.check(['reception', 'admin']), PatientValidator.onUpdate(), patientController.updatePatientInfo);
    router.delete('/delete/:id', auth.validateJWT, allowedRoles.check(['admin']), patientController.deletePatientInfo);

    return router;
  }
}
  
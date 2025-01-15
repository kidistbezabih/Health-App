import { Router } from "express";
import { MedicalCertificateController } from "../controllers/medicalCerificateController";
import { UltraSoundController } from "../controllers/ultraSoundController";
import { XrayController } from "../controllers/xrayController";

export class XrayRoute {
  static get routes(): Router {
    const router = Router();
    const xrayController = new XrayController();

    router.post('/create-xray', xrayController.createXray);
    router.get('/get-xray/:id', xrayController.getXray);
    router.get('/get-all-xray', xrayController.getAllXray);
    router.put('/update-xray/:id', xrayController.updateXray);
    router.delete('/delete-xray/:id', xrayController.deleteXray);

    return router;
  }
}
  
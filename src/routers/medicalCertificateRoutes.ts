import { Router } from "express";
import { MedicalCertificateController } from "../controllers/medicalCerificateController";

export class MedicalCertificatRoute {
  static get routes(): Router {
    const router = Router();
    const medicalCertificateController = new MedicalCertificateController();

    router.post('/create-medical-certificate/:visitId', medicalCertificateController.createMedicalCertificate);
    router.get('/get-medical-certificate/:id', medicalCertificateController.getPatientMedicalCeritificate);
    router.get('/get-all-medical-certificate', medicalCertificateController.getAllMedicalCertificate);
    router.put('/update-medical-certificate/:id', medicalCertificateController.updateMedicalCertificate);
    router.delete('/delete-medical-certificate/:id', medicalCertificateController.deletePatientExamination);

    return router;
  }
}
  
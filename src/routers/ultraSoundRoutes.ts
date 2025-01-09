import { Router } from "express";
import { UltraSoundController } from "../controllers/ultraSoundController";

export class UltraSoundRoute {
  static get routes(): Router {
    const router = Router();
    const ultraSoundController = new UltraSoundController();

    router.post('/create-ultrasound', ultraSoundController.createUltraSound);
    router.get('/get-ultrasound/:id', ultraSoundController.getPatientUltraSound);
    router.get('/get-all-ultrasound', ultraSoundController.getAllUltraSound);
    router.put('/update-ultrasound/:id', ultraSoundController.updateUltraSound);
    router.delete('/delete-ultrasound/:id', ultraSoundController.deletePatientultraSound);

    return router;
  }
}
  

import { Router } from "express";
import { ReferralController } from "../controllers/referralController";

export class ReferralRoute {
  static get routes(): Router {
    const router = Router();
    const referralController = new ReferralController();

    router.post('/create-referral/:patientId', referralController.createReferral);
    router.get('/get-referral/:id', referralController.getReferral);
    router.get('/get-all-referral', referralController.getAllReferral);
    router.put('/update-referral/:id', referralController.updateReferral);
    router.delete('/delete-referral/:id', referralController.deleteReferral);

    return router;
  }
}
  
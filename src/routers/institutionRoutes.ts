import { Router } from "express";
import { InstutitionController } from "../controllers/institutionControllers";
import { AuthMiddleware } from "../middlewares/auth";
import { AllowedRolesMiddleware } from "../middlewares/allowRole";

export class InstitutionRoute {
  static get routes(): Router {
    const router = Router();
    
    const auth = new AuthMiddleware();
    const allowedRoles = new AllowedRolesMiddleware;
    const institutionController = new InstutitionController;

    router.post('/register-institution', auth.validateJWT, allowedRoles.check(['super admin']), institutionController.registerInstitution);
    router.get('/get-institutions',auth.validateJWT, allowedRoles.check(['super admin']), institutionController.getInstitutions);
    router.get('/get-institution-by-id/:id', auth.validateJWT, allowedRoles.check(['super admin']), institutionController.getInstitutionById);
    router.put('/update-institution/:id', auth.validateJWT, allowedRoles.check(['super admin']), institutionController.updateInstitutionById);
    router.delete('/delete-institution/:id', auth.validateJWT, allowedRoles.check(['super admin']), institutionController.deleteInstitution);
    return router;
  }
}
  
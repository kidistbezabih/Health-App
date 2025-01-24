import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";
import { AllowedRolesMiddleware } from "../middlewares/allowRole";
import { UserValidators } from "../validators/userValidator";
import { AuthController } from "../controllers/userController";


export class UserRoutes {
	static get routes(): Router {
		const router = Router();

		const auth = new AuthMiddleware;
		const allowedRoles = new AllowedRolesMiddleware();
		const userController = new AuthController;

		// router.post('resister-user/', auth.validateJWT, allowedRoles.check(['admin']), UserValidators.onCreate(), userController.registerUser);
		router.post('login', auth.validateJWT, allowedRoles.check(['admin']), userController.login );
		router.get('getall-users/',userController.getAllUsers);
		router.get('getuser/:id', userController.getUserById );
		// router.put('update-user/:id', auth.validateJWT, allowedRoles.check(['admin']), UserValidators.onUpdate(), userController.updateUser );
		router.delete('delete-user/:id', auth.validateJWT, userController.deleteUser );
		router.post("/request-password-reset", auth.validateJWT, userController.requestPasswordReset);
		router.get('validate-reset-token', auth.validateJWT, userController.validateResetToken );
		router.post('reset-password', auth.validateJWT, userController.resetPassword );
		router.delete('verify-email', auth.validateJWT, userController.verifyEmail );
		return router;
	}
}

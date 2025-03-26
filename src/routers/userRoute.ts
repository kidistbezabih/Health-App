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

		// add UserValidators.onUpdate()
		router.post('/register-user', auth.validateJWT, userController.registerUser);
		router.get('/verify-email', auth.validateJWT, userController.verifyEmail );
		router.post('/login', auth.validateJWT, userController.login );
		router.get('/get-all-users', auth.validateJWT,userController.getAllUsers);
		router.get('/get-user/:id', auth.validateJWT, userController.getUserById );
		router.put('/update-user/:id', auth.validateJWT, userController.updateUser );
		router.delete('/delete-user/:id', auth.validateJWT, userController.deleteUser );
		router.post("/request-password-reset", auth.validateJWT, userController.requestPasswordReset);
		router.post('/reset-password', auth.validateJWT, userController.resetPassword );
		return router;
	}
}

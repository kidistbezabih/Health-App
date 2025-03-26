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
		router.post('/register-user',  userController.registerUser);
		router.get('/verify-email', userController.verifyEmail );
		router.post('/login', userController.login );
		router.get('/get-all-users', auth.validateJWT, allowedRoles.check(['super admin', 'admin']), userController.getAllUsers);
		router.get('/get-user/:id', auth.validateJWT, allowedRoles.check(['super admin']), userController.getUserById );
		router.put('/update-user/:id', auth.validateJWT, userController.updateUser );
		router.delete('/delete-user/:id', userController.deleteUser );
		router.post("/request-password-reset",userController.requestPasswordReset);
		router.post('/reset-password',  userController.resetPassword );
		return router;
	}
}

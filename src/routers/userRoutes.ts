import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";
import { UserController } from "../controllers/userController";
import { AllowedRolesMiddleware } from "../middlewares/allowRole";
import { UserValidators } from "../validators/userValidator";


export class UserRoutes {
	static get routes(): Router {
		const router = Router();

		const auth = new AuthMiddleware;
		const allowedRoles = new AllowedRolesMiddleware();
		const userController = new UserController();

		// router.post('adduser/', auth.validateJWT, allowedRoles.check(['admin']), UserValidators.onCreate, userController.createUser);

		router.get('getallusers/',userController.getAllUsers);

		router.get('getuser/:id', userController.getUserById );

		// router.put('updateuser/:id', auth.validateJWT, allowedRoles.check(['admin']), UserValidators.onUpdate(), userController.updateUser );

		router.delete('deleteuser/:id', auth.validateJWT, allowedRoles.check(['admin']), userController.deleteUser );

		return router;
	}
}

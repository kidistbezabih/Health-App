import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth';
import { AllowedRolesMiddleware } from '../middlewares/allowRole';
import { RoleController } from '../controllers/roleController';

export class RoleRoutes {
    static get routes(): Router {
        const router = Router();

        const auth = new AuthMiddleware;
        const allowedRoles = new AllowedRolesMiddleware;
        const role = new RoleController;

        router.post('/add-role', auth.validateJWT, allowedRoles.check(['admin',]),  role.createRole)
        router.get('/get-all-roles', auth.validateJWT, allowedRoles.check(['admin',]),   role.getAllRoles)
        router.get('/get-role/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]),   role.getRoleById)
        router.put('/update-role/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]),   role.updateRole)
        router.delete('/delete-role/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]),   role.deleteRole)

        return router;
    }
}

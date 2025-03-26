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

        router.post('/add-role',  role.createRole)
        router.get('/get-role/:id',  role.getRoleById)
        router.get('/get-all-roles', role.getAllRoles)
        router.put('/update-role/:id',  role.updateRole)
        router.delete('/delete-role/:id',  role.deleteRole)

        return router;
    }
}

// import { Router } from 'express';
// import { rolevalidator
// // import { AuthMiddleware } from '../../middlewares/auth';
// // import { AllowedRolesMiddleware } from '../../middlewares/allowedRoles';
// // import { create, list, view, update, destroy } from '../../controllers/RoleController';

// export class UserRoutes {
//     static get routes(): Router {
//         const router = Router();

//         const auth = new AuthMiddleware();
//         const allowedRoles = new AllowedRolesMiddleware();

//         router.post('addrole/', auth.validateJWT, allowedRoles.check(['admin',]), RoleValidators.onCreate,  create)

//         router.get('getallroles/', auth.validateJWT, allowedRoles.check(['admin',]),   list)

//         router.get('getrole/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]),   view)


//         router.put('updaterole/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]), RoleValidators.onUpdate,   update)

//         router.delete('deleterole/:id', auth.validateJWT, allowedRoles.check(['owner', 'admin',]),   destroy)

//         return router;
//     }
// }

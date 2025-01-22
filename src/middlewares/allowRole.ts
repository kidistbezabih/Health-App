/**
 * This middleware can only be called after authentication has taken place
 * it only allows roles that are mentioned to further progress into the application
 *
 * @returns {(function(*, *, *): Promise<*>)|*}
 * @param allowedRoles
 */
import { type NextFunction, type Request, type Response } from 'express';
import { AppError } from '../core/errors/custom.errors';

export class AllowedRolesMiddleware {
	//* Dependency injection
	constructor() {
	}

	public check = (allowedRoles: string[]) => {
        return async (req: Request, _: Response, next: NextFunction): Promise<void> => {
            // @ts-ignore
            const currentUserRoles = req.user!.roles
            let isAllowed = false

            for  (let i=0; i<currentUserRoles.length; i++){
                if (allowedRoles.includes(currentUserRoles[i].role.toLowerCase())) {
                    isAllowed = true
                    next()
                    break;
                }
            }


            if (!isAllowed)
                throw AppError.forbidden('Action not allowed for particular user');

        };
    }

}

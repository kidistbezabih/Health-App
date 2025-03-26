import { type NextFunction, type Request, type Response } from 'express';
import { AppError } from '../core/errors/custom.errors';

export class AllowedRolesMiddleware {
    public check = (allowedRoles: string[]) => {
        return async (req: Request, _: Response, next: NextFunction): Promise<void> => {
            try {
                // Ensure user is authenticated
                if (!req.user) {
                    throw AppError.unauthorized('User is not authenticated');
                }

                // Ensure roles exist and are an array
                const currentUserRoles = req.user.roles;
                if (!Array.isArray(currentUserRoles) || currentUserRoles.length === 0) {
                    throw AppError.unauthorized('User roles not found or empty');
                }

                // Convert roles to lowercase for case-insensitive comparison
                const userRolesLower = currentUserRoles.map(role => role.toLowerCase());
                const allowedRolesLower = allowedRoles.map(role => role.toLowerCase());

                // Check if the user has at least one allowed role
                const isAllowed = userRolesLower.some(role => allowedRolesLower.includes(role));

                if (!isAllowed) {
                    throw AppError.forbidden('Action not allowed for this user');
                }

                next();
            } catch (error) {
                next(error);
            }
        };
    };
}

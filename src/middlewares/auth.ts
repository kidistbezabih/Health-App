import { type NextFunction, type Request, type Response } from 'express';
import { basicJWT, ONE } from '../core';
import { UserModel } from '../models/userModel';
import { RoleModel } from '../models/roleModel';
import { AppError } from '../core/errors/custom.errors';

export class AuthMiddleware {
	//* Dependency injection
	constructor() {
	}

	public validateJWT = async (req: Request, _: Response, next: NextFunction): Promise<void> => {
		
		const authorization = req.header('Authorization');

		if (!authorization) {
			throw AppError.unauthorized('Unauthorized (no authorization header)');
		}

		if (!authorization.startsWith('Bearer ')) {
			throw AppError.unauthorized('Invalid authorization header (Bearer token required)');
		}

		const token = authorization.split(' ').at(ONE) ?? '';
		const payload = basicJWT.validateToken<{ id: number }>(token);
		

		if (!payload) {
			throw AppError.unauthorized('Invalid token');
		}

		const user = await UserModel.findOne({
			where: {
				id: payload.id
			},
			include: [
				{
					model: RoleModel,
					as: 'roles',
					attributes: ['id', 'name', 'description'],
				}
			]
		});

		

		if (!user) {
			throw AppError.notFound(`User with id ${payload.id} not found`);
		}

		const userRole = user.roles.map((role) => role.name.toLowerCase())

		req.user = {id: user.id, roles: userRole}

		next();
	};
}
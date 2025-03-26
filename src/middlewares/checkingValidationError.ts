import { NextFunction, Request, Response } from 'express';

import { Result, validationResult } from 'express-validator';
import { AppError } from '../core/errors/custom.errors';


export class CheckValidationError {
	static checkError =
		(req: Request, res: Response, next: NextFunction) => {
			const errors: Result = validationResult(req);
			if (!errors.isEmpty()) {
				const err = errors.array();
				throw AppError.validationError(err);
			}
			next();
		};
}

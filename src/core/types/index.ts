export interface ValidationType {
	field: string | string[];
	constraint: string;
}

export interface ValidationErrorType {
	field: string;
	constraint: string;
}

export interface SuccessResponse<T> {
	data?: T;
}

export interface ErrorResponse {
	name: string;
	message: string;
	validationErrors?: ValidationType[];
	stack?: string;
}

import { envs } from '../config';

export class ConsoleLogger {
	static log(...args: any[]) {
		if (envs.NODE_ENV === 'development') {
			console.log(...args);
		}
	}

	static error(...args: any[]) {
		if (envs.NODE_ENV === 'development') {
			console.error(...args);
		}
	}

	static info(...args: any[]) {
		if (envs.NODE_ENV === 'development') {
			console.info(...args);
		}
	}

	static table(...args: any[]) {
		if (envs.NODE_ENV === 'development') {
			console.table(...args);
		}
	}
}
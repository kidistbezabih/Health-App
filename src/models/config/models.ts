import { envs } from '../../core/config';
import { Options, Dialect } from 'sequelize';

// configuring database connection setting for different environment(development ,test, production)
export const development: Options = {
	host: envs.DB.HOST,
	username: envs.DB.USERNAME,
	password: envs.DB.PASSWORD,
	port: envs.DB.PORT,
	database: envs.DB.NAME,
	dialect: 'postgres',
	// logging: envs.NODE_ENV === "development",
	logging: console.log,
	logQueryParameters: false,
	ssl: true
};

import {
	CreationOptional,
	DataTypes,
	Model
} from 'sequelize';

import { sequelize } from './config/sequelize';

export interface UserModelRow {
	id: number;
	email: string;
	phone: string;
	phoneVerified?: boolean;
	fullName: string;
	password: string;
  role: string;
	status: boolean;
}

export class UserModel extends Model<UserModelRow, Omit<UserModelRow, 'id'>> {
	declare id: number;
	declare email: string;
	declare phone: string;
	declare phoneVerified?: boolean;
	declare fullName: string;
	declare password: string;
  declare role: string;
	declare status?: boolean;
}

UserModel.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: true
	},
	phoneVerified: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	fullName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
  role: {type: DataTypes.STRING, 
    allowNull: false
  },
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
}, {
	sequelize,
	timestamps: true,
	tableName: 'users',
	paranoid: true,
	deletedAt: true
});

import {
	BelongsToManyAddAssociationMixin,
	BelongsToManyGetAssociationsMixin,
	BelongsToManyRemoveAssociationMixin,
	CreationOptional,
	DataTypes,
	Model,
	NonAttribute
} from 'sequelize';

import { sequelize } from './config/sequelize';
import { RoleModel } from './roleModel';

export interface UserModelRow {
	id?: number;
	email: string;
	verificationToken?: string;
	emailVerified?: boolean;
	phone: string;
	phoneVerified?: boolean;
	fullName: string;
	password: string;
	googleId?: string;
	status: boolean;
}

export class UserModel extends Model<UserModelRow> {
	declare id: CreationOptional<number>;
	declare email: string;	
	declare emailVerified?: boolean;
	declare phone: string;
	declare phoneVerified?: boolean;
	declare fullName: string;
	declare password: string;
	declare googleId?: string;
	declare status: boolean;
	declare verificationToken: CreationOptional<string>;

	declare addRole: BelongsToManyAddAssociationMixin<RoleModel, number>;
	declare getRole: BelongsToManyGetAssociationsMixin<RoleModel>;
	declare removeRole: BelongsToManyRemoveAssociationMixin<RoleModel, number>;

	declare roles?: NonAttribute<RoleModel[]>;
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
	verificationToken: {
		type: DataTypes.STRING,
	},
	emailVerified: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
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
	status: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	googleId: {
		type: DataTypes.STRING,
		allowNull: true
	}
},
	{
	sequelize,
	timestamps: true,
	tableName: 'users',
	paranoid: true,
	deletedAt: true
});

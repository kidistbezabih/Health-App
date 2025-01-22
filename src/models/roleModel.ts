import {
	BelongsToManyAddAssociationMixin,
	BelongsToManyGetAssociationsMixin,
	CreationOptional,
	DataTypes,
	Model
} from 'sequelize';
import { sequelize } from './config/sequelize';
import { UserModel } from './userModel';

export interface RoleModelRow {
	id?: number;
	name: string;
	description: string;
}

export class RoleModel extends Model<RoleModelRow, Omit<RoleModelRow, 'id'>> {
	declare id: CreationOptional<number>;
	declare name: string;
	declare description: string;
	declare addUser: BelongsToManyAddAssociationMixin<UserModel, number>;
	declare getUsers: BelongsToManyGetAssociationsMixin<UserModel>;
}

RoleModel.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'client'
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	timestamps: true,
	tableName: 'roles',
	paranoid: true,
	deletedAt: true
});

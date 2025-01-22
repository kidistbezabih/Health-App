import { CreationOptional, DataTypes, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface RoleUserModelRow {
	id: number;
}

export class RoleUserModel extends Model<RoleUserModelRow, Omit<RoleUserModelRow, 'id'>> {
	declare id: number;
	declare createdAt: CreationOptional<Date>;
	declare updatedAt: CreationOptional<Date>;
	declare deletedAt: CreationOptional<Date>;
}

RoleUserModel.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}
}, {
	sequelize,
	timestamps: true,
	tableName: 'role_users',
	paranoid: true,
	deletedAt: true
});
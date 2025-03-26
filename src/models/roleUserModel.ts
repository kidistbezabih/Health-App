import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface RoleUserModelRow {
	id?: number;
	userId: number;
	roleId: number;
}

export class RoleUserModel extends Model<RoleUserModelRow, Omit<RoleUserModelRow, 'id'>> {
	declare id: CreationOptional<number>;
	declare userId: ForeignKey<number>;
	declare roleId: ForeignKey<number>;
}

RoleUserModel.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}, 
	userId: {
		type: DataTypes.NUMBER,
		allowNull: false,
		references: {
			model: 'users', // Assumed name of the User model table
			key: 'id'
		}
	}, 
	roleId: {
		type: DataTypes.NUMBER,
		allowNull: false,
		references: {
			model: 'roles', // Assumed name of the User model table
			key: 'id'
		}
	}
}, {
	sequelize,
	timestamps: true,
	tableName: 'role_users',
	paranoid: true,
	deletedAt: true
});
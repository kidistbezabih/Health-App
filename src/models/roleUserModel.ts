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
	}, 
	roleId: {
		type: DataTypes.NUMBER,
	}
}, {
	sequelize,
	timestamps: true,
	tableName: 'role_users',
	paranoid: true,
	deletedAt: true
});
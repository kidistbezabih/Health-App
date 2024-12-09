import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface LaboratoryOrderModelRow
{
  id: number;
}

export class LaboratoryOrderModel extends Model<LaboratoryOrderModelRow, Omit<LaboratoryOrderModelRow, 'id'>> {
  declare id: CreationOptional<number>;
}

LaboratoryOrderModel.init({
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
  }, {
  sequelize,
  tableName: 'laboratoryOrder',
  timestamps: true
});


  
import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface InstitusionModelRow{
  id: number;
  name: string;
  adress: string;
}

export class InstitusionModel extends Model<InstitusionModelRow, Omit<InstitusionModelRow, 'id'>> {
  declare id: number;
  declare name: string;
  declare adress: string;
}

InstitusionModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { 
  sequelize,
  timestamps: true,
  tableName: 'institutions',
  paranoid: true,
  deletedAt: true
});
import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface PrescriptionModelRow{
  id?: number;
  cardNumber: string;
  status: string;
  diagnosisIfNotICD?: string;
  drugDetail?: string;
  prescribersName?: string;
}

export class PrescriptionModel extends Model<PrescriptionModelRow, Omit<PrescriptionModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare cardNumber: string;
  declare status: string;
  declare diagnosisIfNotICD: string;
  declare drugDetail: string;
  declare prescribersName: string;
}

PrescriptionModel.init({
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    primaryKey: true
	},
  cardNumber: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  diagnosisIfNotICD: {
    type: DataTypes.STRING,
  },
  drugDetail: {
    type: DataTypes.STRING,
  },
  prescribersName: {
    type: DataTypes.STRING,
  },
}, 
  {
    sequelize,
    timestamps: true,
    tableName: 'prescription',
    paranoid: true,
    deletedAt: true
  });

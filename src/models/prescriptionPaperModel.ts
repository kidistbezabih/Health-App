import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface PrescriptionModelRow{
  id: number;
  weight: string;
  cardNumber: string;
  region: string;
  town: string;
  woreda: string;
  kebele: string;
  houseNumber: string;
  telNumber: string;
  status: string;
  diagnosisIfNotICD: string;
  drugDetail: string;
  prescribersName: string;
  date: string;
  signature: string; 
}

export class PrescriptionModel extends Model<PrescriptionModelRow, Omit<PrescriptionModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare weight: string;
  declare cardNumber: string;
  declare region: string;
  declare town: string;
  declare woreda: string;
  declare kebele: string;
  declare houseNumber: string;
  declare telNumber: string;
  declare status: string;
  declare diagnosisIfNotICD: string;
  declare drugDetail: string;
  declare prescribersName: string;
  declare date: string;
  declare signature: string;
}

PrescriptionModel.init({
  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  weight: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true
  },
  town: {
    type: DataTypes.STRING,
    allowNull: true
  },
  woreda: {
    type: DataTypes.STRING,
    allowNull: true
  },
  kebele: {
    type: DataTypes.STRING,
    allowNull: true
  },
  houseNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diagnosisIfNotICD: {
    type: DataTypes.STRING,
    allowNull: true
  },
  drugDetail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  prescribersName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.STRING,
    allowNull: true
  },
  signature: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, 
  {
    sequelize,
    tableName: 'prescription_paper',
    timestamps: true
  });

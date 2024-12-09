import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface ReferralModelRow{
  id: number;
  to: string;
  nameOfPatient: string;
  cardNumber: string; // foreign key
  Hx: string;
  P_E: string;
  IX: string;
  diagnosis: string;
  treatmentGiven: string;
  reasonForReferral: string;
  physician: string; 
  sign: string; 
  date: string;
}

export class ReferralModel extends Model<ReferralModelRow, Omit<ReferralModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare to: string;
  declare nameOfPatient: string;
  declare cardNumber: string; // foreign key
  declare Hx: string;
  declare P_E: string;
  declare IX: string;
  declare diagnosis: string;
  declare treatmentGiven: string;
  declare reasonForReferral: string;
  declare physician: string; 
  declare sign: string; 
  declare date: string;
}

ReferralModel.init({
  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  to: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nameOfPatient: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Hx: {
    type: DataTypes.STRING,
    allowNull: true
  },
  P_E: {
    type: DataTypes.STRING,
    allowNull: true
  },
  IX: {
    type: DataTypes.STRING,
    allowNull: true
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: true
  },
  treatmentGiven: {
    type: DataTypes.STRING,
    allowNull: true
  },
  reasonForReferral: {
    type: DataTypes.STRING,
    allowNull: true
  },
  physician: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sign: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, 
  {
    sequelize,
    tableName: 'fererral',
    timestamps: true
  });

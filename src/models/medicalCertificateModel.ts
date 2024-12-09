import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface MedicalCertificateModelRow{
  id: number;
  name: string;
  age: number;
  sex: string;
  cardNumber: number;
  dateOfExamination: Date;
  diagnosis: string;
  treatmentGiven: string;
  sickLeave: string;
  DrsSignature: string;
  date: Date;
}

export class MedicalCertificateModel extends Model<MedicalCertificateModelRow, Omit<MedicalCertificateModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare age: number;
  declare sex: string;
  declare cardNumber: number;
  declare dateOfExamination: Date;
  declare diagnosis: string;
  declare treatmentGiven: string;
  declare sickLeave: string;
  declare DrsSignature: string;
  declare date: Date;
}

MedicalCertificateModel.init({
  id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dateOfExamination: {
    type: DataTypes.DATE,
    allowNull: false
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: true
  },
  treatmentGiven: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sickLeave: {
    type: DataTypes.STRING,
    allowNull: true
  },
  DrsSignature: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, 
  {
    sequelize,
    tableName: 'card',
    timestamps: true
  });

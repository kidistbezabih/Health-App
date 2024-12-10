import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface MedicalCertificateModelRow{
  dateOfExamination: Date;
  diagnosis: string;
  treatmentGiven: string;
  sickLeave: string;
  date: Date;
}

export class MedicalCertificateModel extends Model<MedicalCertificateModelRow, Omit<MedicalCertificateModelRow, 'id'>> {
  declare dateOfExamination: Date;
  declare diagnosis: string;
  declare treatmentGiven: string;
  declare sickLeave: string;
  declare date: Date;
}

MedicalCertificateModel.init({
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
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, 
  {
    sequelize,
    timestamps: true,
    tableName: 'cards',
    paranoid: true,
    deletedAt: true
  });

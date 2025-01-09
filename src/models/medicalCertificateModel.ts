import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface MedicalCertificateModelRow {
  id?: number;
  visitId: number
  dateOfExamination: Date;
  diagnosis: string;
  treatmentGiven: string;
  sickLeave: string;
}

export class MedicalCertificateModel extends Model<MedicalCertificateModelRow > {
  declare id: CreationOptional<number>;
  declare visitId: ForeignKey<number>;
  declare dateOfExamination: Date;
  declare diagnosis: string;
  declare treatmentGiven: string;
  declare sickLeave: string;
}

MedicalCertificateModel.init({
 id: {
  type: DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true
},
  visitId: {
    type: DataTypes.INTEGER
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
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'medical-certificate',
  paranoid: true,
  deletedAt: true
});

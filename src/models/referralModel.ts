import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface ReferralModelRow {
  id?: number;
  patientId: number; // foreign key
  to: string;
  Hx: string;
  P_E: string;
  IX: string;
  diagnosis: string;
  treatmentGiven: string;
  reasonForReferral: string;
  physician: string;
}

export class ReferralModel extends Model<ReferralModelRow, Omit<ReferralModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare patientId:ForeignKey<number>;
  declare to: string;
  declare Hx: string;
  declare P_E: string;
  declare IX: string;
  declare diagnosis: string;
  declare treatmentGiven: string;
  declare reasonForReferral: string;
  declare physician: string;
}

ReferralModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  patientId: {
    type: DataTypes.INTEGER,
  },
  to: {
    type: DataTypes.STRING,
  },
  Hx: {
    type: DataTypes.STRING,
  },
  P_E: {
    type: DataTypes.STRING,
  },
  IX: {
    type: DataTypes.STRING,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  treatmentGiven: {
    type: DataTypes.STRING,
  },
  reasonForReferral: {
    type: DataTypes.STRING,
  },
  physician: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'referrals',
  paranoid: true,
  deletedAt: true
});

import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface UltrasoundModelRow {
  id?: number;
  examType: string;
  notes: string;
  imageFilePath: string;
  findings: string;
  diagnosis: string;
  technician: string;
}

export class UltrasoundModel extends Model<UltrasoundModelRow> {
  declare id: number;
  declare examType: string;
  declare notes: string;
  declare imageFilePath: string;
  declare findings: string;
  declare diagnosis: string;
  declare technician: string;
}

UltrasoundModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  examType: {
    type: DataTypes.STRING
  },
  notes: {
    type: DataTypes.STRING
  },
  imageFilePath: {
    type: DataTypes.STRING
  },
  findings: {
    type: DataTypes.STRING
  },
  diagnosis: {
    type: DataTypes.STRING
  },
  technician: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'ultrasounds',
  paranoid: true,
  deletedAt: true
});

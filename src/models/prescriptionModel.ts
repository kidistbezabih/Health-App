import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface PrescriptionModelRow {
  id?: number;
  visitId: number;
  status: string;
  diagnosisIfNotICD?: string;
  drugDetail?: string;
  prescribersName?: string;
}

export class PrescriptionModel extends Model<PrescriptionModelRow, Omit<PrescriptionModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare visitId: ForeignKey<number>
  declare status: string;
  declare diagnosisIfNotICD: string;
  declare drugDetail: string;
  declare prescribersName: string;
}

PrescriptionModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  visitId: {
    type: DataTypes.INTEGER
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

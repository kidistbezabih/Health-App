import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface PrescriptionModelRow {
  id?: number;
  visitId: number;
  medicationType: string;
  medication?: string;
  dosage?: string;
  instruction?: string;
}

export class PrescriptionModel extends Model<PrescriptionModelRow, Omit<PrescriptionModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare visitId: ForeignKey<number>
  declare medicationType: string;
  declare medication: string;
  declare dosage: string;
  declare instruction: string;
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
  medicationType: {
    type: DataTypes.STRING
  },
  medication: {
    type: DataTypes.STRING
  },
  dosage: {
    type: DataTypes.STRING
  },
  instruction: {
    type: DataTypes.STRING
  },
},
  {
    sequelize,
    timestamps: true,
    tableName: 'prescription',
    paranoid: true,
    deletedAt: true
  });

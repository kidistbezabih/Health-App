import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface VisitModelRow{
  id: number;
  date: Date;
  patientId: number;
}

export class VisitModel extends Model<VisitModelRow, Omit<VisitModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare date: Date;
  declare patientId: number;
  // association mixin
}

VisitModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { sequelize, modelName: 'Visit' });
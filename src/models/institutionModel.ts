import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface ExaminationMoldeRow{
  id: number;
  name: string;
  adress: string;
}

export class InstitusionModel extends Model<ExaminationMoldeRow, Omit<ExaminationMoldeRow, 'id'>> {
  declare id: number;
  declare name: string;
  declare adress: string;
}

InstitusionModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'Institution' });
import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'



export interface PatientHistoryModelRow{
  id: number;
}

export class PatientHistoryModel extends Model<PatientHistoryModelRow, Omit<PatientHistoryModelRow, 'id'>> {
  declare id: CreationOptional<number>;
}


PatientHistoryModel.init({
  id: {
    type:  DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true
  }},{
  sequelize,
  timestamps: true,
  tableName: 'patientHistory'
  });


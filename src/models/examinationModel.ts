import { CreationOptional, DataTypes, ForeignKey, Model } from "sequelize";
import {sequelize} from './config/sequelize'


export interface ExaminationModelRow{
  id?: number;
  visitId: number;
  // patientId : number,
  symptoms?: string;
  bloodPressure?: string;
  bodyTemperature?: string;
  respirationRate?: string;
  oxygenSaturation?: string;
  weight?: number;
  height?: number;
}

export class ExaminationModel extends Model<ExaminationModelRow>{
  declare id: CreationOptional<number>;
  declare visitId: ForeignKey<number>;
  // declare patientId: ForeignKey<number>;
  declare symptoms: CreationOptional<string>;
  declare bloodPressure: CreationOptional<string>;
  declare bodyTemperature: CreationOptional<string>;
  declare respirationRate: CreationOptional<string>;
  declare oxygenSaturation: CreationOptional<string>;
  declare weight: CreationOptional<number>;
  declare height: CreationOptional<number>;
}

ExaminationModel.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true
  },
  visitId: {type: DataTypes.INTEGER},
  symptoms: {type: DataTypes.STRING},
  bloodPressure: {type: DataTypes.STRING},
  bodyTemperature: {type: DataTypes.STRING},
  respirationRate: {type: DataTypes.STRING},
  oxygenSaturation: {type: DataTypes.STRING},
  weight: {type: DataTypes.INTEGER},
  height: {type: DataTypes.INTEGER},
}, {
  sequelize,
  timestamps: true,
  tableName: 'examination',
  paranoid: true,
  deletedAt: true
});
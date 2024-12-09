import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface XrayOrUltrasoundModelRow{
  id: number;
	name: string;
  age: number;
  sex: string;
  cardNumber: number;
  impression: string;
  xRay: string;
  ultrasound: string; 
  others: string;
  report:string
  diagnosis: string
  recommendation: string;
  doctorSign: string;
  date: Date;

}

export class XrayOrUltrasoundModel extends Model<XrayOrUltrasoundModelRow, Omit<XrayOrUltrasoundModelRow, 'id'>> {
  declare id: CreationOptional<number>;
	declare name: string;
  declare age: number;
  declare sex: string;
  declare cardNumber: number;
  declare impression: string;
  declare xRay: string;
  declare ultrasound: string; 
  declare others: string;
  declare report:string
  declare diagnosis: string
  declare recommendation: string;
  declare doctorSign: string;
  declare date: Date;
}

XrayOrUltrasoundModel.init({
  id: {
    type:  DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: false 

    // the above 4 are information from card
  },
  impression: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xRay: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ultrasound: {
    type: DataTypes.STRING,
    allowNull: true
  },
  others: {
    type: DataTypes.STRING,
    allowNull: true
  },
  report: {type: DataTypes.STRING,
    allowNull: true
  },
  diagnosis: {
    type: DataTypes.STRING,
    allowNull: true
  },
  recommendation: {
    type: DataTypes.STRING,
    allowNull:true
  },
  doctorSign: {
    type: DataTypes.STRING,
    allowNull:false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
},{
  sequelize,
  timestamps: true,
  tableName: 'xray-or-altrasound'
});

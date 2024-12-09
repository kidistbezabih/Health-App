import { CreationOptional, DataTypes, Model } from 'sequelize';
import {sequelize} from './config/sequelize'

export interface PatientModelRow{
  id: CreationOptional<number>;
	cardNumber: string;
  date: Date;
  name: string;
  age: number;
  sex: string;
  address: string;
  zone: string;
  kebele: string;
  phoneNumber: string;
}

export class PatientModel extends Model<PatientModelRow, Omit<PatientModelRow, 'id'>> {
  declare id: CreationOptional<number>;
	declare cardNumber: string;
  declare date: Date;
  declare name: string;
  declare age: number;
  declare sex: string;
  declare address: string;
  declare zone: string;
  declare kebele: string;
  declare phoneNumber: string;

  // Association mixin
}

PatientModel.init({
  id: {
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
	cardNumber: {
    type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  zone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  kebele: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  }}, 
  {
    sequelize,
    tableName: 'card',
    timestamps: true
  });


  
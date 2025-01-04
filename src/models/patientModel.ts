import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface PatientModelRow {
  id?: number;
  institutionId: number;
  cardNumber: string;
  firstName: string;
  lastName: string;
  birthDate: number;
  sex: string;
  address: string;
  zone: string;
  kebele: string;
  phoneNumber: string;
}

export class PatientModel extends Model<PatientModelRow, Omit<PatientModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare institutionId: ForeignKey<number>;
  declare cardNumber: string;
  declare firstName: string;
  declare lastName: string;
  declare birthDate: number;
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
    autoIncrement: true,
    primaryKey: true
  },
  institutionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cardNumber: {
    type: DataTypes.STRING,
    // auto generate
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.INTEGER,
    allowNull: true
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
  }
},
{
  sequelize,
  timestamps: true,
  tableName: 'patients',
  paranoid: true,
  deletedAt: true
});

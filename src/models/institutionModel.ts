import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface InstitutionModelRow {
  id?: number;
  name: string;
  address: string;
  region: string;
  city:string;
  subcity: string;
  phone: string;
  email: string;
  googleMapsLocation: string;

}

export class InstitutionModel extends Model<InstitutionModelRow, Omit<InstitutionModelRow, 'id'>> {
  declare id: CreationOptional<number>; // Ensure 'id' is optional and auto-incremented
  declare name: string;
  declare address: string;
  declare region: string;
  declare city: string;
  declare subcity: string;
  declare phone: string
  declare email: string
  declare googleMapsLocation: string

}

InstitutionModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  region: {type: DataTypes.STRING,
    allowNull: false
  },
  city: {type: DataTypes.STRING,
    allowNull: false
  },
  subcity: {type: DataTypes.STRING,
    allowNull: false
  },
  phone:{type: DataTypes.STRING,  allowNull: false, },
  email:{type: DataTypes.STRING,  allowNull: false},
  googleMapsLocation:{type: DataTypes.STRING,  allowNull: false}

}, {
  sequelize,
  timestamps: true,
  tableName: 'institutions',
  paranoid: true,
  deletedAt: true // Correcting 'address' to 'address' in the type definition
});

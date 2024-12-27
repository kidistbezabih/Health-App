import { CreationOptional, DataTypes, ForeignKey, Model } from 'sequelize';
import { sequelize } from './config/sequelize';

export interface VisitModelRow {
  id: number;
  patientId: number;
}

export class VisitModel extends Model<VisitModelRow, Omit<VisitModelRow, 'id'>> {
  declare id: CreationOptional<number>;
  declare patientId: ForeignKey<number>;
  
  // association mixin

  // patient examination results, lab result and prescription

}

VisitModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientId: {
    type: DataTypes.INTEGER, // Corrected type to STRING
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: true,
  tableName: 'visits',
  paranoid: true,
  deletedAt: true,
});

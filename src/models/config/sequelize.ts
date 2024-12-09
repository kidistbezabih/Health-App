import { Sequelize } from "sequelize";
import {development} from './modes';


export const sequelize = new Sequelize(development);
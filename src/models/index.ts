import { sequelize } from "./config/sequelize";
import { Sequelize } from "sequelize";

import { ConsoleLogger } from "../core/utils";
import { PatientModel } from "./patientsModel";
import { InstitusionModel } from "./institutionModel";
import { VisitModel } from "./visitModel";
import { PrescriptionModel } from "./prescriptionModel";
import { PreExaminationModel } from "./preExaminationModel";
import { ExaminationModel } from "./examinationModel";
import { LaboratoryOrderModel } from "./laboratoryOrderModel";
import { LaboratoryResultModel } from "./laboratoryResultModel";
import { XrayModel } from "./xrayModel";
import { UltrasoundModel } from "./UltrasoundModel";

export class DB{
 static _instance: DB;

 constructor(private db: any ={}) {
  this.db.sequelize = sequelize;
  this.db.Sequelize = Sequelize;

  //  include database models
  this.db.patient = PatientModel;
  this.db.institutions = InstitusionModel;
  this.db.visit = VisitModel;
  this.db.examination = ExaminationModel;
  this.db.preExamination = PreExaminationModel;
  this.db.laboratoryOrder = LaboratoryOrderModel;
  this.db.laboratoryResult = LaboratoryResultModel;
  this.db.xray = XrayModel;
  this.db.ultrasound = UltrasoundModel;

  // relation between institutions and patients
  // the have many to one to many relation 
  InstitusionModel.hasMany(PatientModel, {
    foreignKey: 'institutionId'
  });
  PatientModel.belongsTo(InstitusionModel);

  // relation between patient and visit
  //  have one to many relation
  PatientModel.hasMany(VisitModel, {
    foreignKey: 'patientId'
  })
  VisitModel.belongsTo(PatientModel)

  // Relation between visit and pre examination
  // have one to one relation
  VisitModel.hasOne(PreExaminationModel, {
    foreignKey: 'visitId'
  })
  PreExaminationModel.belongsTo(VisitModel);


  // Relation between visit and Examination 
  // have one to one relation
  VisitModel.hasMany(ExaminationModel, {
    foreignKey: 'visitId'
  })
  ExaminationModel.belongsTo(VisitModel);

  // Relation between  Laboratory order and laboratory
  // has one to one relation
  LaboratoryOrderModel.hasOne(LaboratoryResultModel, {
    foreignKey: 'laboratoryOrder'
  });
  LaboratoryResultModel.belongsTo(LaboratoryOrderModel);


  // Relation between visit and LaboratoryOrder
  VisitModel.hasMany(LaboratoryOrderModel, {
    foreignKey: 'laboratoryOrder'
  });
  LaboratoryOrderModel.belongsTo(VisitModel);

  // Relation between visit and Prescription
  VisitModel.hasMany(PrescriptionModel, {
    foreignKey: 'prescriptionId'
  });
  PrescriptionModel.belongsTo(VisitModel);

  //  relation between xray and laboratory order
   LaboratoryOrderModel.hasMany(XrayModel, {
    foreignKey: 'xrayId'
   });
   XrayModel.belongsTo(LaboratoryOrderModel)

  //  relation between xray and laboratory result
   LaboratoryResultModel.hasMany(XrayModel,
    {
    foreignKey: 'xrayId'
    }
   );
   XrayModel.belongsTo(LaboratoryOrderModel, {
    foreignKey: 'laboratoryOrderId'
   })

  //  relation between ultrasound and laboratory order
   LaboratoryOrderModel.hasMany(UltrasoundModel, {
    foreignKey: 'ultrasoundId'
   });
   UltrasoundModel.belongsTo(LaboratoryOrderModel)

  //  relation between ultrasound and laboratory result 
   LaboratoryResultModel.hasMany(UltrasoundModel, {
    foreignKey: 'ultrasoundId'
   });
   UltrasoundModel.belongsTo(LaboratoryResultModel)
 }

 public static get instance(): DB {
  if (!DB._instance) {
    DB._instance = new DB();
  }

  return DB._instance;
}

public async migrate(): Promise<string> {
  let message = '';
  try {
    await DB.instance.db.sequelize.sync();
    message = 'Database Migrated Successfully';
    ConsoleLogger.log(message);
  } catch (reason) {
    message = `\nCould Not Migrate Database Successfully',
=================================================================================\n
${reason} \n
=================================================================================`;

    ConsoleLogger.error(message);
  }
  return message;
}

public async migrateForce(): Promise<string> {
  let message = '';
  try {
    // ConsoleLogger.info('Disabling FOREIGN_KEY_CHECKS flag ');
    // await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    ConsoleLogger.info('Dropping all tables ');
    await DB.instance.db.sequelize.drop();
    // ConsoleLogger.info('Enabling FOREIGN_KEY_CHECKS flag');
    // await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    await DB.instance.db.sequelize.sync({ force: true });

    message = 'Database Force Migrated Successfully';
    ConsoleLogger.log(message);
  } catch (reason) {
    message = `\nCould Not Force Migrate Database Successfully',
=================================================================================\n
${reason} \n
=================================================================================`;
    ConsoleLogger.error(message);
  }

  return message;
}
}
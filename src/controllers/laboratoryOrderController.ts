
// import { Request, Response, NextFunction } from "express";
// import { AppError } from "../core/errors/custom.errors";
// import { ExaminationModel } from "../models/examinationModel";
// import { PreExaminationService } from "../services/preExaminationServices";
// import { VisitService } from "../services/visitServices";
// import { ExaminationService } from "../services/examinationServices";


// interface preExaminationRecord{
// }

// export class PreExaminationController{


//   constructor(){
 
//   }

//   //  in examination room doctor can create(examination), update, get(info in the preexamination), get(all the visits) info about the patiene, 
//   public async createExaminationOrder(req: Request<preExaminationRecord>, res: Response, next: NextFunction): Promise<void>{
//     try{
//       const {
        
//       } = req.body;

//     }catch(err){
//     res.status(500).json({messsage: "internal server error", error: err})
//     }
//   }


//   public async getPatientPreExaminationRecord(req: Request<{id: number}>, res: Response, next: NextFunction): Promise<void>{
//     try{
      
//   }catch(err){
//     next(err)
//   }}


// }
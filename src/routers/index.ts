import { Router } from "express";
import { VisitController } from "../controllers/visitController";
import {DevRoutes} from "./devRoutes";
import PatientRoute from "./patientRoutes";

export class AppRouter {
    static get routes(): Router {
        const router = Router();

        router.use('/dev', DevRoutes.routes);

        router.use('/patient', PatientRoute.routes);


        return router;
    }
}

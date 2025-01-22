import {NextFunction, Request, Response, Router} from "express";
import { DB } from "../models";

export class DevRoutes {
    static get routes(): Router {
        const router = Router();

        router.get('/migrate', async (req: Request, res: Response, next: NextFunction) => {
            const message = await DB.instance.migrate();
            console.log(message);
            res.json({message: message});
        });

        router.get('/force-migrate', async (req: Request, res: Response, next: NextFunction) => {
            const message = await DB.instance.migrateForce();
            console.log(message);
            res.json({message: message});
        });

        return router;
    }
}

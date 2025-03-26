import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string, // Optional property
      user: {
        id: number,
        roles: string[]
    }
  }
}
}

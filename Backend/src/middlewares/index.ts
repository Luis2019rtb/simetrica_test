import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const requestValidator = (req: Request, res: Response, next: NextFunction): any => {
    let err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(422).json(err.array());
    }
    next();
}

export * from './user.schema'
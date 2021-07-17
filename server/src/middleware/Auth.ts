import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function Auth(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken)
        return res.status(401).end();
    
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, 'teste') as IPayload;

        req.user_id = sub;

        return next();

    } catch (err) {
        return res.status(401).end()
    }
}
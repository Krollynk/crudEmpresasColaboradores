import { Request, Response, NextFunction } from "express";
import {states} from "../utilities/states";

export const paisesValidation =
    (err: any,
     req: Request,
     res: Response,
     next: NextFunction
    ) => {
        console.error(err);

        if(!req.body || Object.keys((req.body).length === 0)){
            return next({
                statusCode: states.ERROR,
                message: 'El body está vacío',
            });
        }
        let {pdcPaiPais, pdcPaiSiglas} = req.body;
        if(!pdcPaiPais || pdcPaiPais.length === 0){
            return next({
                statusCode: states.ERROR,
                message: 'El nombre de País está vacio.'
            });
        }
        if(!pdcPaiSiglas || pdcPaiSiglas.length === 0){
            return next({
                statusCode: states.ERROR,
                message: 'Las siglas están vacías.'
            });
        }
    };
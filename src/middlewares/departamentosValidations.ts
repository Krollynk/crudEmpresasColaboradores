import { Request, Response, NextFunction } from "express";
import {states} from "../utilities/states";

export const departamentosValidations =
    (
        req: Request,
        res: Response,
        next: NextFunction
    ) =>
    {
        if(!req.body || Object.keys(req.body).length === 0){
            return next({
                statusCode: states.ERROR,
                message: 'El body está vacío',
            });
        }

        const {pdcDepDepartamento, pdcPaiId} = req.body;

        if(!pdcDepDepartamento || pdcDepDepartamento.length === 0){
            return next({
                statusCode: states.ERROR,
                message: 'No se envió nombre del departamento o está vacío',
            });
        }

        if(!pdcPaiId || pdcPaiId.length === 0){
            return next({
                statusCode: states.ERROR,
                message: 'No se envió el país o está vacío',
            });
        }
    };
import { Request, Response, NextFunction } from "express";
import {states} from "../utilities/states";

export const inputsValidations =
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

        if(req.baseUrl === '/paises'){
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
        }

        if(req.baseUrl === '/departamentos'){
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
        }

        if(req.baseUrl === '/municipios'){
            const {pdcMunMunicipio, pdcDepId} = req.body;

            if(!pdcMunMunicipio || pdcMunMunicipio.length === 0){
                return next({
                    statusCode: states.ERROR,
                    message: 'No se envió nombre del Municipio o está vacío',
                });
            }

            if(!pdcDepId || pdcDepId.length === 0){
                return next({
                    statusCode: states.ERROR,
                    message: 'No se envió el Departamento o está vacío',
                });
            }
        }

        next();
    };
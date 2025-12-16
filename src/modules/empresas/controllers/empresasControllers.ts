import { Request, Response, NextFunction } from "express";
import EmpresasServices from "../services/empresasServices";
import {DtoEmpresasInput} from "../dtoEmpresas/dtoEmpresasInput";
import {states} from "../../../utilities/states";

class EmpresasControllers {
    async getAllEmpresas(req: Request, res: Response, next: NextFunction){
        try {
            //const data: DtoEmpresasInput = req.body;
            const result = await EmpresasServices.getAllEmpresas();
            return res.status(states.OK).json(result);
        }catch (error) {
            return next(error);
        }
    }

    async getEmpresa(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcEmpId} = req.params;
            const result = await EmpresasServices.getEmpresa(parseInt(pdcEmpId));
            return res.status(states.OK).json(result);
        }catch (error) {
            return next(error);
        }
    }

    async insertEmpresa(req: Request, res: Response, next: NextFunction){
        try {
            const data: DtoEmpresasInput = req.body;

            return res.status(states.OK).json(data);
        }catch (error) {
            return next(error);
        }
    }

    async updateEmpresa(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcEmpId} = req.params;
            const data: DtoEmpresasInput = req.body;

            return res.status(states.OK).json(data);
        }catch (error) {
            return next(error);
        }
    }

    async deleteEmpresa(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcEmpId} = req.params;

            return res.status(states.OK);
        }catch (error) {
            return next(error);
        }
    }
}

export default new EmpresasControllers();
import {Request, Response, NextFunction} from "express";
import departamentosServices from "../services/departamentosServices";
import {states} from "../../../utilities/states";
import {DtoDepartamentosInsert} from "../dtoDepartamenos/dtoDepartamentos";

class DepartamentosController{
    async getAllDepartamentos(req: Request, res: Response, next: NextFunction){
        try{
            const result = await departamentosServices.getAllDepartamentos();
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async getDepartamento(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcDepId} = req.params;
            const result = await departamentosServices.getDepartamento(parseInt(pdcDepId));
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async insertDepartamento(req: Request, res: Response, next: NextFunction){
        try{
            const data: DtoDepartamentosInsert = req.body;
            const result = await departamentosServices.insertDepartamento(data);
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async updateDepartamento(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcDepId} = req.params;
            const data: DtoDepartamentosInsert = req.body;
            const result = await departamentosServices.updateDepartamento(parseInt(pdcDepId), data);
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async deleteDepartamento(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcDepId} = req.params;
            await departamentosServices.deleteDepartamento(parseInt(pdcDepId));
            return res.status(states.OK);
        }catch (error){
            return next(error);
        }
    }
}

export default new DepartamentosController();
import {Request, Response, NextFunction} from "express";
import paisesServices from "../services/paisesServices";
import {states} from "../../../utilities/states";
class PaisesControllers {
    async getAllPaises(req: Request, res: Response, next: NextFunction){
        try{
            const result = await paisesServices.getAllPaises();
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async getOnePais(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcPaiId} = req.params;
            const result = await paisesServices.getOnePais(parseInt(pdcPaiId));
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async createPais(req: Request, res: Response, next: NextFunction){
        try{
            const data = req.body;
            const result = await paisesServices.insertPais(data);
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }
    async updatePais(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcPaiId} = req.params;
            const data = req.body;
            const result = await paisesServices.updatePais(parseInt(pdcPaiId), data);
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async deletePais(req: Request, res: Response, next: NextFunction){
        try{
            const {pdcPaiId} = req.params;
            await paisesServices.deletePais(parseInt(pdcPaiId));
            return res.status(states.OK);
        }catch (error){
            return next(error);
        }
    }
}

export default new PaisesControllers();
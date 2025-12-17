import { Request, Response, NextFunction } from "express";
import MunicipiosServices from "../services/municipiosServices";
import {states} from "../../../utilities/states";

class MunicipiosController {
    async getAllMunicipios(req: Request, res: Response, next: NextFunction){
        try {
            const result = await MunicipiosServices.getAllMunicipios();
            return res.status(states.OK).json(result);
        }catch (error){
            return next(error);
        }
    }

    async getMunicipios(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcMunId} = req.params;
            const result = await MunicipiosServices.getMunicipio(parseInt(pdcMunId));
            console.log(result);
            return res.status(states.OK).json(result);
        }catch (error) {
            return next(error);
        }
    }

    async inserMunicipio(req: Request, res: Response, next: NextFunction){
        try {
            const data = req.body;
            const result = await MunicipiosServices.inserMunicipio(data);
            return res.status(states.OK).json(result);
        }catch (error) {
            return next(error);
        }
    }

    async updateMunicipio(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcMunId} = req.params;
            const data = req.body;
            const result = await MunicipiosServices.updateMunicipio(parseInt(pdcMunId), data);
            return res.status(states.OK).json(result);
        }catch (error) {
            return next(error);
        }
    }

    async deleteMunicipio(req: Request, res: Response, next: NextFunction){
        try {
            const {pdcMunId} = req.params;
            await MunicipiosServices.deleteMunicipio(parseInt(pdcMunId));
            return res.status(states.OK);
        }catch (error) {
            return next(error);
        }
    }
}

export default new MunicipiosController();
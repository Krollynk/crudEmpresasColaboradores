import {departamentosRepository} from "../repository/departamentosRepository";
import {PdcDepartamentos} from "../../../entities/PdcDepartamentos";
import {DtoDepartamentosInsert} from "../dtoDepartamenos/dtoDepartamentos";
import {states} from "../../../utilities/states";
import {Not} from "typeorm";
import PaisesServices from "../../paises/services/paisesServices";
class DepartamentosServices {
    async getAllDepartamentos():Promise<PdcDepartamentos[]>{
        return await departamentosRepository.find({
            relations:{
              pdcPai: true,
            },
            select: {
                pdcDepId: true,
                pdcDepDepartamento: true,
                pdcPaiId: true,
                pdcPai: {
                    pdcPaiPais: true,
                    pdcPaiSiglas: true,
                }
            },
            where: {
                pdcDepEliminado: Not(1),
            }
        });
    }

    async getDepartamento(pdcDepId: number): Promise<PdcDepartamentos>{
        const result = await departamentosRepository.findOne({
            relations:{
                pdcPai: true,
            },
            select: {
                pdcDepId: true,
                pdcDepDepartamento: true,
                pdcPaiId: true,
                pdcPai: {
                    pdcPaiPais: true,
                    pdcPaiSiglas: true,
                }
            },
            where: {
                pdcDepId: pdcDepId,
                pdcDepEliminado: Not(1),
            }
        });

        if(!result){
            throw{statusCode: states.NOT_FOUND, message: "Departamento no encontrado"};
        }

        return result;
    }

    async insertDepartamento(data:DtoDepartamentosInsert): Promise<PdcDepartamentos>{
        const {pdcPaiId} = data;
        await PaisesServices.getOnePais(pdcPaiId);
        return await departamentosRepository.save(data);
    }

    async updateDepartamento(pdcDepId:number, data:DtoDepartamentosInsert): Promise<PdcDepartamentos>{
        await this.getDepartamento(pdcDepId);
        const {pdcPaiId} = data;
        await PaisesServices.getOnePais(pdcPaiId);
        await departamentosRepository.update({pdcDepId}, data);
        return this.getDepartamento(pdcDepId);
    }

    async deleteDepartamento(pdcDepId:number): Promise<void>{
        await this.getDepartamento(pdcDepId);

        const pdcDepEliminado = 1;
        await departamentosRepository.update({pdcDepId}, {pdcDepEliminado});
    }
}

export default new DepartamentosServices();
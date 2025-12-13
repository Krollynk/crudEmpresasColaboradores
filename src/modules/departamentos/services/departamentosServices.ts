import {departamentosRepository} from "../repository/departamentosRepository";
import {PdcDepartamentos} from "../../../entities/PdcDepartamentos";
import {DtoDepartamentosInsert} from "../dtoDepartamenos/dtoDepartamentos";
import {states} from "../../../utilities/states";
import {Not} from "typeorm";
class DepartamentosServices {
    async getAllDepartamentos():Promise<PdcDepartamentos[]>{
        return await departamentosRepository.find({
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
        return await departamentosRepository.save(data);
    }

    async updateDepartamento(pdcDepId:number, data:DtoDepartamentosInsert): Promise<PdcDepartamentos>{
        await this.getDepartamento(pdcDepId);
        await departamentosRepository.update({pdcDepId}, data);
        return this.getDepartamento(pdcDepId);
    }
}

export default new DepartamentosServices();
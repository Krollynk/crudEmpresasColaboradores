import {paisesRepository} from "../repository/paisesRepository";
import {DtoPaisesGet, DtoPaisesInsert} from "../dtoPaises/dtoPaises"
import {Not} from "typeorm";
import {states} from "../../../utilities/states";

class PaisesServices {
    async getAllPaises():Promise<DtoPaisesGet[]> {
        return await paisesRepository.find({
            where: {
                pdcPaiEliminado: Not(1)
            }
        });
    };

    async getOnePais(pdcPaiId: number): Promise<DtoPaisesGet>{
        const result =  await paisesRepository.findOne({
            where: {
                pdcPaiId: pdcPaiId,
                pdcPaiEliminado: Not(1)
            }
        });

        if(!result){
            throw{statusCode: states.NOT_FOUND, message: "Usuario no encontrado"};
        }

        return result;
    }

    async insertPais(data:DtoPaisesInsert):Promise<DtoPaisesGet>{
        return await paisesRepository.save(data);
    }

    async updatePais(pdcPaiId: number, data: DtoPaisesInsert): Promise<DtoPaisesGet> {
        await this.getOnePais(pdcPaiId);
        await paisesRepository.update({pdcPaiId},data);

        return await this.getOnePais(pdcPaiId);
    }

    async deletePais(pdcPaiId: number): Promise<void> {
        await this.getOnePais(pdcPaiId);
        const pdcPaiEliminado = 1;

        await paisesRepository.update({pdcPaiId},{pdcPaiEliminado});
    }
}

export default new PaisesServices();
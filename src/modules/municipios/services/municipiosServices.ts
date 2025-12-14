import {PdcMunicipios} from "../../../entities/PdcMunicipios";
import {MunicipiosRepository} from "../repository/municipiosRepository";
import {Not} from "typeorm";
import {states} from "../../../utilities/states";
import {DtoMunicipiosInsert} from "../dtoMunicipios/dtoMunicipios";

class MunicipiosServices {
    async getAllMunicipios(): Promise<PdcMunicipios[]>{
        return await MunicipiosRepository.find({
            relations:{
                pdcDep: {
                    pdcPai: true,
                }
            },
            select: {
                pdcMunId: true,
                pdcMunMunicipio: true,
                pdcDepFechaCreado: true,
                pdcDep: {
                    pdcDepDepartamento: true,
                    pdcPai: {
                        pdcPaiPais: true,
                    },
                }
            },
            where: {
                pdcDepEliminado: Not(1),
            }
        });
    }

    async getMunicipios(pdcMunId:number): Promise<PdcMunicipios>{
        const result = await MunicipiosRepository.findOne({
            relations:{
                pdcDep: {
                    pdcPai: true,
                }
            },
            select: {
                pdcMunId: true,
                pdcMunMunicipio: true,
                pdcDepFechaCreado: true,
                pdcDep: {
                    pdcDepId: true,
                    pdcDepDepartamento: true,
                    pdcPai: {
                        pdcPaiId: true,
                        pdcPaiPais: true,
                    },
                }
            },
            where: {
                pdcMunId: pdcMunId,
                pdcDepEliminado: Not(1),
            }
        });
        if(!result){
            throw {statusCode: states.NOT_FOUND, message: "Municipio no encontrado"}
        }

        return result;
    }

    async inserMunicipio(data: DtoMunicipiosInsert):Promise<PdcMunicipios>{
        return await MunicipiosRepository.save(data);
    }

    async updateMunicipios(pdcMunId:number, data: DtoMunicipiosInsert):Promise<PdcMunicipios>{
        await this.getMunicipios(pdcMunId);
        const result = await MunicipiosRepository.update({pdcMunId}, data);

        return await this.getMunicipios(pdcMunId);
    }

    async deleteMunicipio(pdcMunId: number):Promise<void>{
        await this.getMunicipios(pdcMunId);
        const pdcDepEliminado = 1;
        await MunicipiosRepository.update({pdcMunId}, {pdcDepEliminado});
    }
}

export default new MunicipiosServices();
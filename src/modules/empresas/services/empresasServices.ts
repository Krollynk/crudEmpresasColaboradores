import {PdcEmpresas} from "../../../entities/PdcEmpresas";
import {empresasRepository} from "../repository/empresasRepository";
import {DtoEmpresasInput} from "../dtoEmpresas/dtoEmpresasInput";
import MunicipiosServices from "../../municipios/services/municipiosServices";
import DepartamentosServices from "../../departamentos/services/departamentosServices";
import PaisesServices from "../../paises/services/paisesServices";
import {Not} from "typeorm";
import {states} from "../../../utilities/states";

class EmpresasServices {
    async getAllEmpresas(): Promise<PdcEmpresas[]>{
        return await empresasRepository.find({
            relations: {
                pdcPai: true,
                pdcDep: true,
                pdcMun: true,
            },
            select: {
                pdcEmpId: true,
                pdcEmpNombreComercial: true,
                pdcEmpRazonSocial: true,
                pdcEmpNit: true,
                pdcEmpTelefono: true,
                pdcEmpCorreo: true,
                pdcPaiId: true,
                pdcDepId: true,
                pdcMunId: true,
                pdcPai: {pdcPaiPais: true},
                pdcDep: {pdcDepDepartamento: true},
                pdcMun: {pdcMunMunicipio: true}
            },
            where: {
                pdcEmpEliminado: Not(1),
            }
        });
    }
    async getEmpresa(pdcEmpId: number): Promise<PdcEmpresas>{
        const result =  await empresasRepository.findOne({
            relations: {
                pdcPai: true,
                pdcDep: true,
                pdcMun: true,
            },
            select: {
                pdcEmpId: true,
                pdcEmpNombreComercial: true,
                pdcEmpRazonSocial: true,
                pdcEmpNit: true,
                pdcEmpTelefono: true,
                pdcEmpCorreo: true,
                pdcPaiId: true,
                pdcDepId: true,
                pdcMunId: true,
                pdcPai: {pdcPaiPais: true},
                pdcDep: {pdcDepDepartamento: true},
                pdcMun: {pdcMunMunicipio: true}
            },
            where: {
                pdcEmpId: pdcEmpId,
                pdcEmpEliminado: Not(1),
            }
        });

        if(!result){
            throw {statusCode: states.NOT_FOUND, message: "Empresa no encontrada"};
        }

        return result;
    }

    async insertEmpresa(data: DtoEmpresasInput): Promise<PdcEmpresas>{
        const {pdcPaiId, pdcDepId, pdcMunId} = data;
        await this.validateRegion(pdcMunId, pdcDepId, pdcPaiId);
        return await empresasRepository.save(data);
    }

    async updateEmpresa(pdcEmpId: number, data: DtoEmpresasInput): Promise<PdcEmpresas>{
        await this.getEmpresa(pdcEmpId);

        const {pdcPaiId, pdcDepId, pdcMunId} = data;
        await this.validateRegion(pdcMunId, pdcDepId, pdcPaiId);

        await empresasRepository.update({pdcEmpId},data);
        return await this.getEmpresa(pdcEmpId);
    }

    async deleteEmpresa(pdcEmpId: number): Promise<void>{
        await this.getEmpresa(pdcEmpId);
        const pdcEmpEliminado = 1;
        await empresasRepository.update({pdcEmpId},{pdcEmpEliminado});
    }

    async validateRegion(pdcMunId: number, pdcDepId: number, pdcPaiId: number): Promise<void>{
        const munResult = await MunicipiosServices.getMunicipio(pdcMunId);
        console.log(munResult);
        if(munResult.pdcDep.pdcDepId != pdcDepId){
            throw {statusCode: states.ERROR, message: `Departamento enviado no corresponde al Municipio. Esperado: ${munResult.pdcDep.pdcDepId} Enviado: ${pdcDepId} `};
        }
        const depResult = await DepartamentosServices.getDepartamento(pdcDepId);
        if(depResult.pdcPaiId != pdcPaiId){
            throw {statusCode: states.ERROR, message: "País enviado no corresponde al Departamento"};
        }
        await PaisesServices.getOnePais(pdcPaiId);
    }
}

export default new EmpresasServices();
import {PdcEmpresas} from "../../../entities/PdcEmpresas";
import {empresasRepository} from "../repository/empresasRepository";
import {DtoEmpresasInput} from "../dtoEmpresas/dtoEmpresas";
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
            throw {statusCode: states.NOT_FOUND, message: "Departamento no encontrado"};
        }

        return result;
    }
}

export default new EmpresasServices();
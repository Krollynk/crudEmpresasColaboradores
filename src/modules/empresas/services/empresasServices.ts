import {PdcEmpresas} from "../../../entities/PdcEmpresas";
import {empresasRepository} from "../repository/empresasRepository";

class EmpresasServices {
    async getAllEmpresas(): Promise<PdcEmpresas[]>{
        return await empresasRepository.find();
    }
    async getEmpresa(pdcEmpId: number): Promise<PdcEmpresas>{

    }
}

export default new EmpresasServices();
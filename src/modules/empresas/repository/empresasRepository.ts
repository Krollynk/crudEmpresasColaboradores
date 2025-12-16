import {AppDataSource} from "../../../config/data_source";
import {PdcEmpresas} from "../../../entities/PdcEmpresas";

export const empresasRepository = AppDataSource.getRepository(PdcEmpresas);
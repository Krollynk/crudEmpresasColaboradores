import {AppDataSource} from "../../../config/data_source";
import {PdcPais} from "../../../entities/PdcPais";

export const paisesRepository = AppDataSource.getRepository(PdcPais);
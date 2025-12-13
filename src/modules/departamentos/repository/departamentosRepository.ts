import {AppDataSource} from "../../../config/data_source";
import {PdcDepartamentos} from "../../../entities/PdcDepartamentos";

export const departamentosRepository = AppDataSource.getRepository(PdcDepartamentos);
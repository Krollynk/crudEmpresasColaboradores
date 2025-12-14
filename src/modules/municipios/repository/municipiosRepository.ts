import {AppDataSource} from "../../../config/data_source";
import {PdcMunicipios} from "../../../entities/PdcMunicipios";

export const MunicipiosRepository = AppDataSource.getRepository(PdcMunicipios);
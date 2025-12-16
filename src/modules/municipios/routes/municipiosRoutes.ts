import express from "express";
import MunicipiosController from "../controllers/municipiosController";
import {inputsValidations} from "../../../middlewares/inputsValidations";

const router = express();

router.get('/', MunicipiosController.getAllMunicipios);
router.post('/', inputsValidations, MunicipiosController.inserMunicipio);
router.route('/:pdcMunId')
    .get(MunicipiosController.getMunicipios)
    .patch(inputsValidations, MunicipiosController.updateMunicipio)
    .delete(MunicipiosController.deleteMunicipio);
export default router;
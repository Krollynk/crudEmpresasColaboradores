import express from "express";
import MunicipiosController from "../controllers/municipiosController";

const router = express();

router.get('/', MunicipiosController.getAllMunicipios);
router.post('/', MunicipiosController.inserMunicipio);
router.route('/:pdcMunId')
    .get(MunicipiosController.getMunicipios)
    .patch(MunicipiosController.updateMunicipio)
    .delete(MunicipiosController.deleteMunicipio);
export default router;
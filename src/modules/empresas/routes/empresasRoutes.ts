import express from "express";
import EmpresasControllers from "../controllers/empresasControllers";
import {inputsValidations} from "../../../middlewares/inputsValidations";

const router = express();

router.get('/', EmpresasControllers.getAllEmpresas);
router.post('/', inputsValidations, EmpresasControllers.insertEmpresa);
router.route('/:pdcEmpId')
    .get(EmpresasControllers.getEmpresa)
    .patch(inputsValidations, EmpresasControllers.updateEmpresa)
    .delete(EmpresasControllers.deleteEmpresa);

export default router;
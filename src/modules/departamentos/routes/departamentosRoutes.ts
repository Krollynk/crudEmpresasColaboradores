import express from "express";
import departamentosController from "../controllers/departamentosController";
import {inputsValidations} from "../../../middlewares/inputsValidations";

const router = express();

router.get('/', departamentosController.getAllDepartamentos);
router.post('/', inputsValidations, departamentosController.insertDepartamento);
router.route('/:pdcDepId')
    .get(departamentosController.getDepartamento)
    .patch(inputsValidations, departamentosController.updateDepartamento)
    .delete(departamentosController.deleteDepartamento);

export default router;
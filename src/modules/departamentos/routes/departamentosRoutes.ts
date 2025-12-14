import express from "express";
import departamentosController from "../controllers/departamentosController";
import {departamentosValidations} from "../../../middlewares/departamentosValidations";

const router = express();

router.get('/', departamentosController.getAllDepartamentos);
router.post('/', departamentosValidations, departamentosController.insertDepartamento);
router.route('/:pdcDepId')
    .get(departamentosController.getDepartamento)
    .patch(departamentosValidations, departamentosController.updateDepartamento)
    .delete(departamentosController.deleteDepartamento);

export default router;
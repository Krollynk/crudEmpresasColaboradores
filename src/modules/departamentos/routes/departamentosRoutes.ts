import express from "express";
import departamentosController from "../controllers/departamentosController";

const router = express();

router.get('/', departamentosController.getAllDepartamentos);
router.post('/', departamentosController.insertDepartamento);
router.route('/:pdcDepId')
    .get(departamentosController.getDepartamento)
    .patch(departamentosController.updateDepartamento)
    .delete(departamentosController.deleteDepartamento);

export default router;
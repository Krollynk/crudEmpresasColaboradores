import express from "express";
import EmpresasControllers from "../controllers/empresasControllers";

const router = express();

router.get('/', EmpresasControllers.getAllEmpresas);
router.post('/', EmpresasControllers.insertEmpresa);
router.route('/:pdcEmpId')
    .get(EmpresasControllers.getEmpresa)
    .patch(EmpresasControllers.updateEmpresa)
    .delete(EmpresasControllers.deleteEmpresa);

export default router;
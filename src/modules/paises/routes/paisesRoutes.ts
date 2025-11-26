import express from "express";
import paisesControllers from "../controllers/paisesControllers";

const router = express();

router.get('/', paisesControllers.getAllPaises);
router.post('/', paisesControllers.createPais);
router.route('/:pdcPaiId')
    .get(paisesControllers.getOnePais)
    .patch(paisesControllers.updatePais)
    .delete(paisesControllers.deletePais);

export default router;
import express from "express";
import paisesControllers from "../controllers/paisesControllers";
import {paisesValidation} from "../../../middlewares/paisesValidation";

const router = express();

router.get('/', paisesControllers.getAllPaises);
router.post('/', paisesValidation, paisesControllers.createPais);
router.route('/:pdcPaiId')
    .get(paisesControllers.getOnePais)
    .patch(paisesValidation, paisesControllers.updatePais)
    .delete(paisesControllers.deletePais);

export default router;
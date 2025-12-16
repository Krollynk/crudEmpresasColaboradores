import express from "express";
import paisesControllers from "../controllers/paisesControllers";
import {inputsValidations} from "../../../middlewares/inputsValidations";

const router = express();

router.get('/', paisesControllers.getAllPaises);
router.post('/', inputsValidations, paisesControllers.createPais);
router.route('/:pdcPaiId')
    .get(paisesControllers.getOnePais)
    .patch(inputsValidations, paisesControllers.updatePais)
    .delete(paisesControllers.deletePais);

export default router;
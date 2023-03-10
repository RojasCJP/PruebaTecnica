import { Router } from 'express';
import { getDepartamentos, createDepartamento, getDepartamento, updateDepartamento } from '../controllers/departamento.controller';

const router = Router();

router.route('/')
    .get(getDepartamentos)
    .post(createDepartamento);

router.route('/:departamentoId')
    .get(getDepartamento)
    .put(updateDepartamento)

export default router;

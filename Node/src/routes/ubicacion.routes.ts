import { Router } from 'express';
import { createUbicacion, getUbicacion, getUbicaciones, updateUbicacion } from '../controllers/ubicacion.controller';

const router = Router();

router.route('/')
    .get(getUbicaciones)
    .post(createUbicacion);

router.route('/:ubicacionId')
    .get(getUbicacion)
    .put(updateUbicacion)

export default router;

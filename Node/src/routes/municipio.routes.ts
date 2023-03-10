import { Router } from 'express';
import { getMunicipios, createMunicipio, getMunicipio, updateMunicipio } from '../controllers/municipio.controller';

const router = Router();

router.route('/')
    .get(getMunicipios)
    .post(createMunicipio);

router.route('/:municipioId')
    .get(getMunicipio)
    .put(updateMunicipio)

export default router;

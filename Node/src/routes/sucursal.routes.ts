import { Router } from 'express';
import { getSucursales, createSucursal, getSucursal, updateSucursal } from '../controllers/sucursal.controller';

const router = Router();

router.route('/')
    .get(getSucursales)
    .post(createSucursal);

router.route('/:sucursalId')
    .get(getSucursal)
    .put(updateSucursal)

export default router;

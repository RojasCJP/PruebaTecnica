import { Router } from 'express';
import { getProductos, createProducto, getProducto, updateProducto } from '../controllers/producto.controller';

const router = Router();

router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:productoId')
.get(getProducto)
.put(updateProducto);

export default router;
import { Router } from 'express'
import { getCategorias, createCategoria, getCategoria, deleteCategoria, updateCategoria } from '../controllers/categoria.controller'

const router = Router();

router.route('/')
    .get(getCategorias)
    .post(createCategoria);

router.route('/:categoriaId')
    .get(getCategoria)
    .delete(deleteCategoria)
    .put(updateCategoria);

export default router;

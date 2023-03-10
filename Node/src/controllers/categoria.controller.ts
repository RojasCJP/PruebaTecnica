import { Request, Response } from 'express';
import { Categoria } from '../interface/Interfaces';
import { connect } from '../database';

export async function getCategorias(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const categorias = await conn.query('SELECT * FROM categoria');
    return res.json(categorias[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createCategoria(req: Request, res: Response): Promise<Response> {
  const newCategoria: Categoria = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO categoria SET ?', [newCategoria]);
  return res.json({
    message: 'New Categoria Created'
  });
}

export async function getCategoria(req: Request, res: Response): Promise<Response> {
  const id = req.params.categoriaId;
  const conn = await connect();
  const categorias = await conn.query('SELECT * FROM categoria WHERE id = ?', [id]);
  return res.json(categorias[0]);
}

export async function updateCategoria(req: Request, res: Response): Promise<Response> {
  const id = req.params.categoriaId;
  const updatedCategoria: Categoria = req.body;
  const conn = await connect();
  await conn.query('UPDATE categoria SET ? WHERE id = ?', [updatedCategoria, id]);
  return res.json({
    message: 'Categoria Updated'
  });
}

export async function deleteCategoria(req: Request, res: Response): Promise<Response> {
  const id = req.params.categoriaId;
  const conn = await connect();
  await conn.query('DELETE FROM categoria WHERE id = ?', [id]);
  return res.json({
    message: 'Categoria Deleted'
  });
}

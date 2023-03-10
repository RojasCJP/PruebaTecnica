import { Request, Response } from 'express';
import { Producto } from '../interface/Interfaces';
import { connect } from '../database';

export async function getProductos(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const productos = await conn.query('SELECT * FROM producto');
    return res.json(productos[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createProducto(req: Request, res: Response): Promise<Response> {
  const newProducto: Producto = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO producto SET ?', [newProducto]);
  return res.json({
    message: 'New Producto Created'
  });
}

export async function getProducto(req: Request, res: Response): Promise<Response> {
  const id = req.params.productoId;
  const conn = await connect();
  const productos = await conn.query('SELECT * FROM producto WHERE id = ?', [id]);
  return res.json(productos[0]);
}

export async function updateProducto(req: Request, res: Response): Promise<Response> {
  const id = req.params.productoId;
  const updatedProducto: Producto = req.body;
  const conn = await connect();
  await conn.query('UPDATE producto SET ? WHERE id = ?', [updatedProducto, id]);
  return res.json({
    message: 'Producto Updated'
  });
}


import { Request, Response } from 'express';
import { Sucursal } from '../interface/Interfaces';
import { connect } from '../database';

export async function getSucursales(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const sucursales = await conn.query('SELECT * FROM sucursal');
    return res.json(sucursales[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createSucursal(req: Request, res: Response): Promise<Response> {
  const newSucursal: Sucursal = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO sucursal SET ?', [newSucursal]);
  return res.json({
    message: 'New Sucursal Created'
  });
}

export async function getSucursal(req: Request, res: Response): Promise<Response> {
  const id = req.params.sucursalId;
  const conn = await connect();
  const sucursales = await conn.query('SELECT * FROM sucursal WHERE id = ?', [id]);
  return res.json(sucursales[0]);
}

export async function updateSucursal(req: Request, res: Response): Promise<Response> {
  const id = req.params.sucursalId;
  const updatedSucursal: Sucursal = req.body;
  const conn = await connect();
  await conn.query('UPDATE sucursal SET ? WHERE id = ?', [updatedSucursal, id]);
  return res.json({
    message: 'Sucursal Updated'
  });
}

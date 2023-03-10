import { Request, Response } from 'express';
import { Ubicacion } from '../interface/Interfaces';
import { connect } from '../database';

export async function getUbicaciones(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const ubicaciones = await conn.query('SELECT * FROM ubicacion');
    return res.json(ubicaciones[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createUbicacion(req: Request, res: Response): Promise<Response> {
  const newUbicacion: Ubicacion = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO ubicacion SET ?', [newUbicacion]);
  return res.json({
    message: 'New Ubicacion Created'
  });
}

export async function getUbicacion(req: Request, res: Response): Promise<Response> {
  const id = req.params.ubicacionId;
  const conn = await connect();
  const ubicaciones = await conn.query('SELECT * FROM ubicacion WHERE id = ?', [id]);
  return res.json(ubicaciones[0]);
}

export async function updateUbicacion(req: Request, res: Response): Promise<Response> {
  const id = req.params.ubicacionId;
  const updatedUbicacion: Ubicacion = req.body;
  const conn = await connect();
  await conn.query('UPDATE ubicacion SET ? WHERE id = ?', [updatedUbicacion, id]);
  return res.json({
    message: 'Ubicacion Updated'
  });
}

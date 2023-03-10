import { Request, Response } from 'express';
import { Departamento } from '../interface/Interfaces';
import { connect } from '../database';

export async function getDepartamentos(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const departamentos = await conn.query('SELECT * FROM departamento');
    return res.json(departamentos[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createDepartamento(req: Request, res: Response): Promise<Response> {
  const newDepartamento: Departamento = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO departamento SET ?', [newDepartamento]);
  return res.json({
    message: 'New Departamento Created'
  });
}

export async function getDepartamento(req: Request, res: Response): Promise<Response> {
  const id = req.params.departamentoId;
  const conn = await connect();
  const departamentos = await conn.query('SELECT * FROM departamento WHERE id = ?', [id]);
  return res.json(departamentos[0]);
}

export async function updateDepartamento(req: Request, res: Response): Promise<Response> {
  const id = req.params.departamentoId;
  const updatedDepartamento: Departamento = req.body;
  const conn = await connect();
  await conn.query('UPDATE departamento SET ? WHERE id = ?', [updatedDepartamento, id]);
  return res.json({
    message: 'Departamento Updated'
  });
}

export async function deleteDepartamento(req: Request, res: Response): Promise<Response> {
  const id = req.params.departamentoId;
  const conn = await connect();
  await conn.query('DELETE FROM departamento WHERE id = ?', [id]);
  return res.json({
    message: 'Departamento Deleted'
  });
}

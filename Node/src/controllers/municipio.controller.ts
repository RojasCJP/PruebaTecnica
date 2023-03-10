import { Request, Response } from 'express';
import { Municipio } from '../interface/Interfaces';
import { connect } from '../database';

export async function getMunicipios(req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect();
    const municipios = await conn.query('SELECT * FROM municipio');
    return res.json(municipios[0]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

export async function createMunicipio(req: Request, res: Response): Promise<Response> {
  const newMunicipio: Municipio = req.body;
  const conn = await connect();
  await conn.query('INSERT INTO municipio SET ?', [newMunicipio]);
  return res.json({
    message: 'New Municipio Created'
  });
}

export async function getMunicipio(req: Request, res: Response): Promise<Response> {
  const id = req.params.municipioId;
  const conn = await connect();
  const municipios = await conn.query('SELECT * FROM municipio WHERE id = ?', [id]);
  return res.json(municipios[0]);
}

export async function updateMunicipio(req: Request, res: Response): Promise<Response> {
  const id = req.params.municipioId;
  const updatedMunicipio: Municipio = req.body;
  const conn = await connect();
  await conn.query('UPDATE municipio SET ? WHERE id = ?', [updatedMunicipio, id]);
  return res.json({
    message: 'Municipio Updated'
  });
}

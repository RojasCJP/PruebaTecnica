import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Table5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Sucursal')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de sucursal</th>
            <th>Correo electronico</th>
            <th>Numero telefonico</th>
            <th>Ubicacion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreSucursal}</td>
              <td>{item.correoSucursal}</td>
              <td>{item.telefonoSucursal}</td>
              <td>{item.idUbicacion}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table5;
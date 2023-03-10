import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Table6 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/ubicacion')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Direccion</th>
            <th>Municipio al que pertenece</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.direccion}</td>
              <td>{item.idMunicipio}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table6;
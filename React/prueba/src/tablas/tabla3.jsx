import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Table3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/municipio')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table  striped bordered hover responsive>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de municipio</th>
            <th>Id de departamento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreMunicipio}</td>
              <td>{item.idDepartamento}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table3;
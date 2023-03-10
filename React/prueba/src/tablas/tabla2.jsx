import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Table2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/departamento')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del departamento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreDepartamento}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table2;
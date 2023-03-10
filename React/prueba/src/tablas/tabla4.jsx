import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Table4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/producto')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Contenido</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreProducto}</td>
              <td>{item.idCategoria}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table4;
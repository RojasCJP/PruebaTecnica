import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const Table1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categoria')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table striped bordered hover responsive>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de categoria</th>
            <th>Descripcion de categoria</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreCategoria}</td>
              <td>{item.descripcionCategoria}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table1;
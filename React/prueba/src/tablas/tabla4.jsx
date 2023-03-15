import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Button = ({ name }) => {
  return <button className='mx-1 btn btn-primary'>{name}</button>;
};

const Table4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/producto')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table  striped bordered hover responsive>
      <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Contenido</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreProducto}</td>
              <td>{item.idCategoria}</td>
              <td><Button name="Editar">Editar</Button></td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table4;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Button = ({ name }) => {
  return <button className='mx-1 btn btn-primary'>{name}</button>;
};

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
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreCategoria}</td>
              <td>{item.descripcionCategoria}</td>
              <td><Button name="Editar">Editar</Button></td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table1;
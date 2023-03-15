import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Button = ({ name }) => {
  return <button className='mx-1 btn btn-primary'>{name}</button>;
};
const Table6 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/ubicacion')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <Table striped bordered hover responsive>
      <thead>
          <tr>
            <th>ID</th>
            <th>Direccion</th>
            <th>Municipio al que pertenece</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.direccion}</td>
              <td>{item.idMunicipio}</td>
              <td><Button name="Editar">Editar</Button></td>
            </tr>
          ))}
        </tbody>
    </Table>
  );
};

export default Table6;
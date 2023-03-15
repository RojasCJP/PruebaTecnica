import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import EditFormModal from '../updates/update6';

const Button = ({ name, onClick }) => {
  return <button className='mx-1 btn btn-primary' onClick={onClick}>{name}</button>;
};
const Table6 = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({ show: false, id: null });
  
  useEffect(() => {
    fetch('http://localhost:5000/ubicacion')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const handleSubmit = async (formData) => {
    const response = await fetch(`http://localhost:5000/ubicacion/${modal.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <>
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
              <td><Button 
                  name="Editar" 
                  onClick={() => setModal({ show: true, id: item.id })} 
                /></td>
            </tr>
          ))}
        </tbody>
    </Table>
    <EditFormModal 
    show={modal.show} 
    onSubmit={handleSubmit} 
    handleClose={() => setModal({ show: false, id: null })} 
    categoryId={modal.id} 
  />
  </>
  );
};

export default Table6;
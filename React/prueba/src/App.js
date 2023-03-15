import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table1 from './tablas/tabla1';
import Table2 from './tablas/tabla2';
import Table3 from './tablas/tabla3';
import Table4 from './tablas/tabla4';
import Table5 from './tablas/tabla5';
import Table6 from './tablas/tabla6';
import FormModal1 from './inserts/modal1';
import FormModal2 from './inserts/modal2';
import FormModal3 from './inserts/modal3';
import FormModal4 from './inserts/modal4';
import FormModal5 from './inserts/modal5';
import FormModal6 from './inserts/modal6';

const Button = ({ name, onClick }) => {
  return <button className='mx-1 btn btn-success' onClick={onClick}>{name}</button>;
};

function App() {
  const [data, setData] = useState([]);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const handleSubmit = async (formData) => {
    const response = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <div className="container">
      <h1 className="my-5">Tabla de Categoria</h1>
      <Table1/>
      <br/>
      <br/>
      <h1 className="my-5">Tabla de Departamentos</h1>
      <Table2/>
      <br/>
      <br/>
      <h1 className="my-5">Tabla de Municipios</h1>
      <Table3/>
      <br/>
      <br/>
      <h1 className="my-5">Tabla de Productos</h1>
      <Table4/>
      <br/>
      <br/>
      <h1 className="my-5">Tabla de Sucursales</h1>
      <Table5/>
      <br/>
      <br/>
      <h1 className="my-5">Tabla de Ubicaciones</h1>
      <Table6/>
      <br/>
      <br/>
      <div className='button-container'>
        <Button name="Agregar Categoria" onClick={() => setShowModal1(true)} />
        <Button name="Agregar Departamento" onClick={() => setShowModal2(true)} />
        <Button name="Agregar Municipio" onClick={() => setShowModal3(true)} />
        <Button name="Agregar Productos" onClick={() => setShowModal4(true)} />
        <Button name="Agregar Sucursales" onClick={() => setShowModal5(true)} />
        <Button name="Agregar Ubicaciones" onClick={() => setShowModal6(true)} />
      </div>
      <FormModal1 show={showModal1} onSubmit={handleSubmit} handleClose={() => setShowModal1(false)} />
      <FormModal2 show={showModal2} onSubmit={handleSubmit} handleClose={() => setShowModal2(false)} />
      <FormModal3 show={showModal3} onSubmit={handleSubmit} handleClose={() => setShowModal3(false)} />
      <FormModal4 show={showModal4} onSubmit={handleSubmit} handleClose={() => setShowModal4(false)} />
      <FormModal5 show={showModal5} onSubmit={handleSubmit} handleClose={() => setShowModal5(false)} />
      <FormModal6 show={showModal6} onSubmit={handleSubmit} handleClose={() => setShowModal6(false)} />
    </div>
  );
}

export default App;

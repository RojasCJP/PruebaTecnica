import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Table1 from './tablas/tabla1';
import Table2 from './tablas/tabla2';
import Table3 from './tablas/tabla3';
import Table4 from './tablas/tabla4';
import Table5 from './tablas/tabla5';
import Table6 from './tablas/tabla6';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/producto');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

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
    </div>
  );
}

export default App;

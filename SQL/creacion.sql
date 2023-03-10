-- Crear la tabla de Departamento
CREATE TABLE Departamento (
  id INT NOT NULL AUTO_INCREMENT,
  nombreDepartamento VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Crear la tabla de Municipio
CREATE TABLE Municipio (
  id INT NOT NULL AUTO_INCREMENT,
  nombreMunicipio VARCHAR(50) NOT NULL,
  idDepartamento INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idDepartamento) REFERENCES Departamento(id)
);

-- Crear la tabla de Ubicacion
CREATE TABLE Ubicacion (
  id INT NOT NULL AUTO_INCREMENT,
  direccion VARCHAR(100) NOT NULL,
  idMunicipio INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idMunicipio) REFERENCES Municipio(id)
);
-- Crear la tabla de Categoria
CREATE TABLE Categoria (
  id INT NOT NULL AUTO_INCREMENT,
  nombreCategoria VARCHAR(50) NOT NULL,
  descripcionCategoria VARCHAR(100),
  PRIMARY KEY (id)
);

-- Crear la tabla de Producto
CREATE TABLE Producto (
  id INT NOT NULL AUTO_INCREMENT,
  nombreProducto VARCHAR(50) NOT NULL,
  idCategoria INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idCategoria) REFERENCES Categoria(id)
);

-- Crear la tabla de Sucursal
CREATE TABLE Sucursal (
  id INT NOT NULL AUTO_INCREMENT,
  nombreSucursal VARCHAR(50) NOT NULL,
  correoSucursal VARCHAR(50),
  telefonoSucursal VARCHAR(20),
  idUbicacion INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idUbicacion) REFERENCES Ubicacion(id)
);


-- en este caso decidi cambiar la tabla sucursal utilizando unicamente el campo de direccion para acceder a los municipios y departamentos, evitando asi duplicar datos
-- los productos no se mencionan en el enunciado pero considero que es algo prudente agregarlos y hacer que se puedan consultar de manera global, en todas las sucursales

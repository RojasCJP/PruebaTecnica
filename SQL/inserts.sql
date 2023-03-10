-- aqui se encontraran unicamente inserts de ejemplo pero la forma sera parecida

-- Insertar Departamento
INSERT INTO Departamento (nombreDepartamento) VALUES ('Alta Verapaz');
INSERT INTO Departamento (nombreDepartamento) VALUES ('Baja Verapaz');
INSERT INTO Departamento (nombreDepartamento) VALUES ('Chimaltenango');

-- Insertar Municipio
INSERT INTO Municipio (nombreMunicipio, idDepartamento) VALUES ('Cobán', 1);
INSERT INTO Municipio (nombreMunicipio, idDepartamento) VALUES ('Salama', 2);
INSERT INTO Municipio (nombreMunicipio, idDepartamento) VALUES ('Chimaltenango', 3);

-- Insertar Ubicacion
INSERT INTO Ubicacion (direccion, idMunicipio) VALUES ('7a. Avenida 4-61 Zona 4', 1);
INSERT INTO Ubicacion (direccion, idMunicipio) VALUES ('2a. Calle 4-89 Zona 1', 2);
INSERT INTO Ubicacion (direccion, idMunicipio) VALUES ('5a. Avenida 8-23 Zona 2', 3);

-- Insertar Categoria
INSERT INTO Categoria (nombreCategoria, descripcionCategoria) VALUES ('Electrónica', 'Productos electrónicos y tecnológicos');
INSERT INTO Categoria (nombreCategoria, descripcionCategoria) VALUES ('Ropa', 'Ropa y accesorios para hombres y mujeres');
INSERT INTO Categoria (nombreCategoria, descripcionCategoria) VALUES ('Hogar', 'Artículos para el hogar y decoración');

-- Insertar Producto
INSERT INTO Producto (nombreProducto, idCategoria) VALUES ('Televisor LED 50 pulgadas', 1);
INSERT INTO Producto (nombreProducto, idCategoria) VALUES ('Camisa de algodón para hombre', 2);
INSERT INTO Producto (nombreProducto, idCategoria) VALUES ('Lámpara de techo estilo vintage', 3);

-- Insertar Sucursal
INSERT INTO Sucursal (nombreSucursal, correoSucursal, telefonoSucursal, idUbicacion) VALUES ('Sucursal Cobán', 'coban@miempresa.com', '12345678', 1);
INSERT INTO Sucursal (nombreSucursal, correoSucursal, telefonoSucursal, idUbicacion) VALUES ('Sucursal Salama', 'salama@miempresa.com', '23456789', 2);
INSERT INTO Sucursal (nombreSucursal, correoSucursal, telefonoSucursal, idUbicacion) VALUES ('Sucursal Chimaltenango', 'chimaltenango@miempresa.com', '34567890', 3);

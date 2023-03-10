-- Crear la vista de Municipios y Departamentos
CREATE VIEW Municipios_Departamentos AS
SELECT m.nombreMunicipio AS Municipio, d.nombreDepartamento AS Departamento
FROM Municipio m
INNER JOIN Departamento d ON m.idDepartamento = d.idDepartamento;

-- Crear la vista de Productos y Categorías
CREATE VIEW Productos_Categorias AS
SELECT p.nombreProducto AS Producto, c.nombreCategoria AS Categoria
FROM Producto p
INNER JOIN Categoria c ON p.idCategoria = c.idCategoria;

-- Crear la vista de Sucursales y Ubicaciones
CREATE VIEW Sucursales_Ubicaciones AS
SELECT s.nombreSucursal AS Sucursal, u.direccion AS Direccion, m.nombreMunicipio AS Municipio, d.nombreDepartamento AS Departamento, s.correo AS Correo, s.telefono AS Telefono
FROM Sucursal s
INNER JOIN Ubicacion u ON s.idUbicacion = u.idUbicacion
INNER JOIN Municipio m ON u.idMunicipio = m.idMunicipio
INNER JOIN Departamento d ON m.idDepartamento = d.idDepartamento;

-- Eliminar la vista de municipios por departamento
DROP VIEW IF EXISTS Municipios_Departamentos;

-- Eliminar la vista de productos con sus respectivas categorías
DROP VIEW IF EXISTS Productos_Categorias;

-- Eliminar la vista de sucursales con su ubicación completa
DROP VIEW IF EXISTS Sucursales_Ubicaciones;

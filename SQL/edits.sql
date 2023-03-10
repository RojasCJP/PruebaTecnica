-- aqui se encontraran unicamente updates de ejemplo pero la forma sera parecida

-- Update para la tabla Departamento
UPDATE Departamento SET nombreDepartamento = 'Quetzaltenango (Xela)' WHERE idDepartamento = 2;

-- Update para la tabla Municipio
UPDATE Municipio SET nombreMunicipio = 'Quetzaltenango (Xela)' WHERE idMunicipio = 2;

-- Update para la tabla Ubicacion
UPDATE Ubicacion SET direccion = '8a. Avenida 10-32 Zona 1' WHERE idUbicacion = 2;

-- Update para la tabla Categoria
UPDATE Categoria SET descripcion = 'Ropa y accesorios de moda' WHERE idCategoria = 2;

-- Update para la tabla Producto
UPDATE Producto SET nombreProducto = 'Zapatos deportivos para mujer' WHERE idProducto = 2;

-- Update para la tabla Sucursal
UPDATE Sucursal SET telefono = '22222222' WHERE idSucursal = 2;

-- en cuanto a los updates considero que las relaciones no deberian de cambiar por lo que los unicos campos que cambiaran seran los campos de texto

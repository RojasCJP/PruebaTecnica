export interface Departamento {
    idDepartamento?: number;
    nombreDepartamento: string;
}

export interface Municipio {
    idMunicipio?: number;
    nombreMunicipio: string;
    idDepartamento: number;
}

export interface Ubicacion {
    idUbicacion?: number;
    direccion: string;
    idMunicipio: number;
}

export interface Categoria {
    idCategoria?: number;
    nombreCategoria: string;
    descripcion: string;
}

export interface Producto {
    idProducto?: number;
    nombreProducto: string;
    idCategoria: number;
}

export interface Sucursal {
    idSucursal?: number;
    nombreSucursal: string;
    correoSucursal: string;
    telefonoSucursal: string;
    idUbicacion: number;
}

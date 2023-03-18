export interface Uusuarios{
    usuarios: usuario[]
}

export interface usuario {
    id: number,
    dni: string,
    nombre: string,
    correo: string,
    telefono: number,
    fecha: string,
    direccionEnvio: string,
    referencia: string,
    departamento: string,
    provincia: string,
    distrito: string,
    comprobantePage: string,
    activo: string,
    clave: string,
    cursos: cursos[]
}
interface cursos{
    id: number,
    nombre: string,
    tipo: string
}
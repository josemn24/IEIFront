import { Localidad } from "./Localidad";

export interface Biblioteca {

    _id?: string;
    nombre: string;
    tipo: string;
    direccion: string;
    codigoPostal: string;
    longitud: number;
    latitud: number;
    telefono: string;
    email: string,
    descripcion: string,
    en_localidad: Localidad

}

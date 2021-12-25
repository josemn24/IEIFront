import { Provincia } from "./Provincia";

export interface Localidad {

    _id?: string;
    nombre: string;
    codigo: string;
    en_provincia: Provincia;
    
}
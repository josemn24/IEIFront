import { Biblioteca } from "./Biblioteca";

export interface SearchResponse {

    BibliotecasDevolver: Array<Biblioteca>;

}

export interface LoadResponse {

    ok: boolean;
    msg: string;

}

export interface DeleteResponse {

    ok: boolean;
    msg: string;

}
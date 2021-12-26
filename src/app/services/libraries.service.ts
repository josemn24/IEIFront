import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DeleteResponse, LoadResponse, SearchResponse } from '../models/Responses';

@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getLibraries(localidad: string, codigoPostal: string, provincia: string, tipo: string): Observable<SearchResponse> {
    const body = { localidad, codigoPostal, provincia, tipo };
    const url  = `${ this.baseUrl }api/biblioteca/obtenerBibliotecas`;
    return this.http.post<SearchResponse>( url, body );
  }

  loadAllLibraries(): Observable<LoadResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/cargarTodasLasBibliotecas`;
    return this.http.get<LoadResponse>( url );
  }

  loadEusLibraries(): Observable<LoadResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/cargarBibliotecasEuskadi`;
    return this.http.get<LoadResponse>( url );
  }

  loadCatLibraries(): Observable<LoadResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/cargarBibliotecasCat`;
    return this.http.get<LoadResponse>( url );
  }

  loadCovLibraries(): Observable<LoadResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/cargarBibliotecasValencia`;
    return this.http.get<LoadResponse>( url );
  }

  deleteLibraries(): Observable<DeleteResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/eliminarDatos`;
    return this.http.get<DeleteResponse>( url );
  }

}

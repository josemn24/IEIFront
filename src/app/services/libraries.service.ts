import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DeleteResponse, SearchResponse } from '../models/Responses';

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

  deleteLibraries(): Observable<DeleteResponse> {
    const url  = `${ this.baseUrl }api/biblioteca/cargarTodasLasBibliotecas`;
    return this.http.get<DeleteResponse>( url );
  }

}

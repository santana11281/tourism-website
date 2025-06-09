import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Activity } from '../../models/Activity';
import { Climate } from '../../models/Climate';
import { environment } from '../../environments/devlopment';
import { Route } from '../models/Route';

export interface Detalle {
  id: number;
  destino_id: number;
  ciudad: string;
  provincia: string;
  detalle: string;
  descripcion: string;
}

export interface Alojamiento {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  email: string;
  precio: number;
  rating: number;
}

export interface Transporte {
  id: number;
  tipo: string;
  descripcion: string;
}

export interface MejorEpoca {
  id: number;
  epoca: string;
  temporada: string;
}

export interface Destino {
  id: number;
  nombre: string;
  ciudad: string;
  provincia: string;
  tipo: string;
  descripcion: string;
  imagen_portada_url: string;
  imagen: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  private apiUrl = environment.apiUrl + 'destinos';

  constructor(private http: HttpClient) {}

  getDestinos(): Observable<Destino[]> {
    return this.http.get<Destino[]>(this.apiUrl + "/GetDestinos").pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getActivities(destinoId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/GetActivities/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getClima(destinoId: number): Observable<Climate> {
    return this.http.get<Climate>(`${this.apiUrl}/GetClima/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getMejorEpoca(destinoId: number): Observable<MejorEpoca> {
    return this.http.get<MejorEpoca>(`${this.apiUrl}/GetMejorEpoca/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getTransporte(destinoId: number): Observable<Transporte> {
    return this.http.get<Transporte>(`${this.apiUrl}/GetTransporte/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getAlojamiento(destinoId: number): Observable<Alojamiento> {
    return this.http.get<Alojamiento>(`${this.apiUrl}/GetAlojamiento/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getDetalle(destinoId: number): Observable<Detalle> {
    return this.http.get<Detalle>(`${environment.apiUrl}destinos/GetDetalle/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getRutas(destinoId: number): Observable<Route[]> {
    return this.http.get<Route[]>(`${environment.apiUrl}destinos/rutas/${destinoId}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('No se pudo cargar los destinos. Por favor, intente nuevamente más tarde.'));
  }
}

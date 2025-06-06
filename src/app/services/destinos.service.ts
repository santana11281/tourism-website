import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Activity } from '../../models/Activity';
import { Climate } from '../../models/Climate';

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
  private apiUrl = 'https://localhost:7023/destinos';

  constructor(private http: HttpClient) {}

  getDestinos(): Observable<Destino[]> {
    return this.http.get<Destino[]>(this.apiUrl+"/GetDestinos").pipe(
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(() => new Error('No se pudo cargar los destinos. Por favor, intente nuevamente más tarde.'));
  }
}

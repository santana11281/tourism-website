import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValoracionApi } from '../models/ValoracionApi';
import { Valoracion } from '../models/Valoracion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ValoracionesService {
  private apiUrl = environment.apiUrl + 'valoraciones';

  constructor(private http: HttpClient) {}

  getReviewsByDestino(destinoId: number): Observable<ValoracionApi[]> {
    return this.http.get<ValoracionApi[]>(`${this.apiUrl}/PorDestino/${destinoId}`);
  }




  createReview(review: Valoracion): Observable<Valoracion> {
      return this.http.post<Valoracion>(`${this.apiUrl}`, review);
  }
}

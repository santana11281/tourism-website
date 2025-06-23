import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria, ImagenGaleria } from '../interfaces/galeria.interface';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  private readonly baseUrl = 'http://localhost:5041/Galeria/galeria';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/Categorias`);
  }

  getImagenesPorDestino(destinoId: number): Observable<ImagenGaleria[]> {
    return this.http.get<ImagenGaleria[]>(`${this.baseUrl}/Imagenes/${destinoId}`);
  }
}

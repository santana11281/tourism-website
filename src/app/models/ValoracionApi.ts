export interface CategoriaValoracion {
  id: number;
  valoracionId: number;
  categoria: string;
  rating: number;
}

export interface ValoracionApi {
  id: number;
  destinoId: number;
  usuario: string;
  fechaVisita: string;
  ratingGeneral: number;
  comentario: string;
  destino: any; // Assuming destino is nullable
  categorias: CategoriaValoracion[];
}

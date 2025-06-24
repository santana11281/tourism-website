export interface ValoracionCategoria {
  id?: number; // Opcional al crear
  valoracionId?: number; // Opcional al crear
  categoria: string;
  rating: number;
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

export interface Valoracion {
  id?: number; // Opcional al crear
  destinoId: number;
  usuario: string;
  fechaVisita: string; // ISO string, ej: "2024-06-24T00:00:00"
  ratingGeneral: number;
  comentario: string;
  destino?: Destino; // Opcional, solo si el backend lo retorna
  categorias: ValoracionCategoria[];
}

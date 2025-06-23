export interface Ruta {
  origen: string;
  destino: string;
  distancia_km: number;
  duracion: string;
}

export interface Parada {
  nombre: string;
  descripcion: string;
}

export interface TransporteOpciones {
  tipo: string;
  icono: string;
  duracion: string;
  precio_min: number;
  precio_max: number;
}

export interface Tips {
  texto: string;
}

export interface RutaInfoDto {
  ruta: Ruta;
  paradas: Parada[];
  transporteOpciones: TransporteOpciones[];
  tips: Tips[];
}

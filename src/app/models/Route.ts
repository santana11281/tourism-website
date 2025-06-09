export interface Route {
    ruta: RouteInfo;
    paradas: any[];
    transporteOpciones: TransportOption[];
    tips: Tip[];
}

export interface RouteInfo {
    id: number;
    origen: string;
    destino: string;
    distancia_km: number;
    duracion: string;
}

export interface TransportOption {
    id: number;
    ruta_id: number;
    tipo: string;
    duracion: string;
    precio_min: number;
    precio_max: number;
    icono: string;
}

export interface Tip {
    id: number;
    ruta_id: number;
    texto: string;
}

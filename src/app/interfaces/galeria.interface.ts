export interface Categoria {
    id: number;
    nombre: string;
}

export interface ImagenGaleria {
    id: number;
    destinoId: number;
    categoriaId: number;
    url: string;
    descripcion: string;
    categoria: Categoria;
}

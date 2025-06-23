import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaService } from '../../../services/galeria.service';
import { Categoria, ImagenGaleria } from '../../../interfaces/galeria.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  categories: Categoria[] = [];
  images: ImagenGaleria[] = [];
  selectedCategory: number | null = null;
  destinoId: number = 1; // Ejemplo de destino ID

  constructor(private galeriaService: GaleriaService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadImagesByDestination(this.destinoId);
  }

  loadCategories(): void {
    this.galeriaService.getCategorias().subscribe({
      next: (data) => {
        console.log('Categorías cargadas:', data);
        this.categories = data;
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
      }
    });
  }

  loadImagesByDestination(destinoId: number): void {
    this.galeriaService.getImagenesPorDestino(destinoId).subscribe({
      next: (data) => {
        console.log('Imágenes cargadas:', data);
        this.images = data;
      },
      error: (error) => {
        console.error('Error al cargar imágenes:', error);
      }
    });
  }

  filterImagesByCategory(categoryId: number | null): void {
    this.selectedCategory = categoryId;
  }

  getFilteredImages(): ImagenGaleria[] {
    if (this.selectedCategory === null) {
      return this.images;
    }
    return this.images.filter(img => img.categoriaId === this.selectedCategory);
  }
}

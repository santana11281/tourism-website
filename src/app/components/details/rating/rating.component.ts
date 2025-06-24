import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoredService } from '../../../services/stored.service';
import { ValoracionesService } from '../../../services/valoraciones.service';
import { Valoracion } from '../../../models/Valoracion';

interface CategoryRating {
  name: string;
  rating: number;
  icon: string;
}

interface Review {
  username: string;
  destinoId: number;
  date: string;
  ratings: {
    overall: number;
    categories: CategoryRating[];
  };
  comment: string;
}

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  currentDestinoId: number = 1; // Default value, can be set dynamically

  newReview: Review = {
    username: '',
    destinoId: 1,
    date: '',
    ratings: {
      overall: 0,
      categories: [
        { name: 'Alojamiento', rating: 0, icon: 'fa-star' },
        { name: 'Gastronomía', rating: 0, icon: 'fa-star' },
        { name: 'Ubicación', rating: 0, icon: 'fa-star' }
      ]
    },
    comment: ''
  };

  reviews: Review[] = [];

  constructor(
    private storedService: StoredService,
    private valoracionesService: ValoracionesService
  ) {}


  ngOnInit(): void {

    this.loadReviews();
    this.newReview.destinoId = this.storedService.destinoid || 1; // Default to 1 if no destination ID is stored
    this.currentDestinoId = this.storedService.destinoid || 1; // Set currentDestinoId from stored service or default to 1
  }

  private loadReviews(): void {
    this.valoracionesService.getReviewsByDestino(this.currentDestinoId).subscribe({
      next: (data) => {
        console.log('Reviews fetched:', data);
        this.reviews = data.map((review) => ({
          username: review.usuario,
          destinoId: review.destinoId,
          date: review.fechaVisita,
          ratings: {
            overall: review.ratingGeneral,
            categories: review.categorias.map((categoria) => ({
              name: categoria.categoria,
              rating: categoria.rating,
              icon: 'fa-star'
            }))
          },
          comment: review.comentario
        }));
      },
      error: (err) => {
        console.error('Error fetching reviews:', err);
      }
    });
  }

  private saveReviews(): void {
    const valoracion: Valoracion = {
        id: 0, // Assuming new valoraciones have no ID yet
        destinoId: this.newReview.destinoId,
        usuario: 'defaultUser', // Replace with actual user data
        fechaVisita: new Date().toISOString(), // Current date
        ratingGeneral: this.newReview.ratings.overall,
        comentario: this.newReview.comment,
        destino: undefined, // Optional property
        categorias: this.newReview.ratings.categories.map(category => ({
            id: undefined, // Assuming ID is optional when creating
            categoria: category.name,
            rating: category.rating
        }))
    };

    this.valoracionesService.updateValoracion(valoracion.id || 0, valoracion).subscribe({
      next: (data: Valoracion) => {
        console.log('Valoracion created:', data);
      },
      error: (err: Error) => {
        console.error('Error creating valoracion:', err);
      }
    });
  }

  submitRating() {
    const valoracion: Valoracion = {
      destinoId: 1,
      usuario: "michaelsd28",
      fechaVisita: "2025-06-23T00:00:00",
      ratingGeneral: 4,
      comentario: "Me gustó este lugar",
      destino: undefined,
      categorias: [
        {
          categoria: "Alojamiento",
          rating: 3
        },
        {
          categoria: "Gastronomía",
          rating: 4
        },
        {
          categoria: "Ubicación",
          rating: 1
        }
      ]
    };

    this.valoracionesService.updateValoracion(valoracion.id || 0, valoracion).subscribe({
      next: (response: Valoracion) => {
        console.log('Valoración enviada exitosamente:', response);
      },
      error: (err: Error) => {
        console.error('Error al enviar la valoración:', err);
      }
    });


  }

  setCategoryRating(categoryName: string, rating: number) {
    const category = this.newReview.ratings.categories.find(c => c.name === categoryName);
    if (category) {
      category.rating = rating;
    }
  }

  defaultAvatarPath = 'assets/images/avatars/user-avatar.jpg';

  getAvatarPath(avatarPath: string | undefined): string {
    return avatarPath || 'https://cdn-icons-png.flaticon.com/512/9187/9187604.png';
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement) {
      imgElement.src = this.defaultAvatarPath;
    }
  }
}

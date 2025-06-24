import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService
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
        { name: 'Alojamiento', rating: 1, icon: 'fa-star' },
        { name: 'Gastronomía', rating: 1, icon: 'fa-star' },
        { name: 'Ubicación', rating: 1, icon: 'fa-star' }
      ]
    },
    comment: ''
  };

  reviews: Review[] = [];

  constructor(
      private storedService: StoredService,
      private valoracionesService: ValoracionesService,
      private toastr: ToastrService // Inject ToastrService
  ) {}

  ngOnInit(): void {
    this.loadReviews();
    this.newReview.destinoId = this.storedService.destinoid || 1; // Default to 1 if no destination ID is stored
    this.currentDestinoId = this.storedService.destinoid || 1; // Set currentDestinoId from stored service or default to 1
  }

  private loadReviews(): void {
    this.valoracionesService.getReviewsByDestino(this.currentDestinoId).subscribe({
      next: (data) => {
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
        this.toastr.error('Hubo un error al cargar las reseñas.', 'Error');
      }
    });
  }




  submitRating() {
      const destinoId = this.storedService.destinoid || 1; // Retrieve destinoId from StoredService or default to 1
      const valoracion: Valoracion = {
          destinoId: destinoId,
          usuario: this.newReview.username, // Use username from form
          fechaVisita: new Date().toISOString(), // Current date
          ratingGeneral: this.newReview.ratings.overall, // Overall rating from form
          comentario: this.newReview.comment, // Comment from form
          destino: undefined, // Optional property
          categorias: this.newReview.ratings.categories.map(category => ({
              categoria: category.name,
              rating: category.rating
          }))
      };

      this.valoracionesService.createReview(valoracion).subscribe({
          next: (response: Valoracion) => {
              this.toastr.success('¡Valoración enviada exitosamente!', 'Éxito');
              this.newReview = {
                  username: '',
                  destinoId: destinoId,
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
              }; // Reset the form

              this.loadReviews(); // Update the list of reviews
          },
          error: (err: Error) => {
              this.toastr.error('Hubo un error al enviar la valoración.', 'Error');
          }
      });
                  this.toastr.success('Gracias por tu valoración!', 'Valoración Enviada', { // Show success message
                timeOut: 2000,
                progressBar: true,
                positionClass: 'toast-bottom-right'
              });
              // scroll to new review
              setTimeout(() => {
                const reviewElement = document.querySelector('.review:last-child');
                if (reviewElement) {
                  reviewElement.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
  }

  setCategoryRating(categoryName: string, rating: number) {
      const category = this.newReview.ratings.categories.find(c => c.name === categoryName);
      if (category) {
          // Ensure the rating is between 1 and 5
          category.rating = Math.max(1, Math.min(5, rating));
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

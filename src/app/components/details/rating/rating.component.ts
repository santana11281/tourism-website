import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RatingCategory {
  name: string;
  icon: string;
  rating: number;
}

interface Review {
  id: number;
  username: string;
  ratings: {
    overall: number;
    categories: RatingCategory[];
  };
  comment: string;
  date: Date;
  avatar: string;
}

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  ratingCategories: RatingCategory[] = [
    { name: 'Limpieza', icon: 'fa-broom', rating: 0 },
    { name: 'Ubicación', icon: 'fa-location-dot', rating: 0 },
    { name: 'Servicios', icon: 'fa-concierge-bell', rating: 0 },
    { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 0 },
    { name: 'Ambiente', icon: 'fa-umbrella-beach', rating: 0 }
  ];

  reviews: Review[] = [
    {
      id: 1,
      username: "María García",
      ratings: {
        overall: 5,
        categories: [
          { name: 'Limpieza', icon: 'fa-broom', rating: 5 },
          { name: 'Ubicación', icon: 'fa-location-dot', rating: 5 },
          { name: 'Servicios', icon: 'fa-concierge-bell', rating: 4 },
          { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 5 },
          { name: 'Ambiente', icon: 'fa-umbrella-beach', rating: 5 }
        ]
      },
      comment: "¡Increíble lugar! Las playas son espectaculares y los hoteles ofrecen un servicio excelente.",
      date: new Date('2024-05-15'),
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      username: "Juan Pérez",
      ratings: {
        overall: 4,
        categories: [
          { name: 'Limpieza', icon: 'fa-broom', rating: 4 },
          { name: 'Ubicación', icon: 'fa-location-dot', rating: 5 },
          { name: 'Servicios', icon: 'fa-concierge-bell', rating: 4 },
          { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 3 },
          { name: 'Ambiente', icon: 'fa-umbrella-beach', rating: 4 }
        ]
      },
      comment: "Muy buena experiencia. La comida es deliciosa y hay muchas actividades disponibles.",
      date: new Date('2024-05-10'),
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      username: "Ana Martínez",
      ratings: {
        overall: 5,
        categories: [
          { name: 'Limpieza', icon: 'fa-broom', rating: 5 },
          { name: 'Ubicación', icon: 'fa-location-dot', rating: 5 },
          { name: 'Servicios', icon: 'fa-concierge-bell', rating: 5 },
          { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 4 },
          { name: 'Ambiente', icon: 'fa-umbrella-beach', rating: 5 }
        ]
      },
      comment: "El mejor destino del Caribe. La playa Bávaro es un paraíso.",
      date: new Date('2024-05-05'),
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  newReview = {
    ratings: {
      overall: 5,
      categories: this.ratingCategories.map(cat => ({...cat}))
    },
    comment: ''
  };

  maxRating = 5;

  getAverageRating(): number {
    const sum = this.reviews.reduce((acc, review) => acc + review.ratings.overall, 0);
    return sum / this.reviews.length;
  }

  getCategoryAverage(categoryName: string): number {
    const sum = this.reviews.reduce((acc, review) => {
      const category = review.ratings.categories.find(cat => cat.name === categoryName);
      return acc + (category?.rating || 0);
    }, 0);
    return sum / this.reviews.length;
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(this.maxRating - rating).fill(0);
  }

  setOverallRating(rating: number): void {
    this.newReview.ratings.overall = rating;
  }

  setCategoryRating(categoryName: string, rating: number): void {
    const category = this.newReview.ratings.categories.find(cat => cat.name === categoryName);
    if (category) {
      category.rating = rating;
    }
  }

  submitReview(): void {
    if (this.newReview.comment.trim()) {
      const review: Review = {
        id: this.reviews.length + 1,
        username: "Usuario Anónimo",
        ratings: {
          overall: this.newReview.ratings.overall,
          categories: this.newReview.ratings.categories.map(cat => ({...cat}))
        },
        comment: this.newReview.comment,
        date: new Date(),
        avatar: "https://i.pravatar.cc/150?img=8"
      };

      this.reviews.unshift(review);
      this.newReview = {
        ratings: {
          overall: 5,
          categories: this.ratingCategories.map(cat => ({...cat}))
        },
        comment: ''
      };
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  id: number;
  username: string;
  rating: number;
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
  reviews: Review[] = [
    {
      id: 1,
      username: "María García",
      rating: 5,
      comment: "¡Increíble lugar! Las playas son espectaculares y los hoteles ofrecen un servicio excelente.",
      date: new Date('2024-05-15'),
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      username: "Juan Pérez",
      rating: 4,
      comment: "Muy buena experiencia. La comida es deliciosa y hay muchas actividades disponibles.",
      date: new Date('2024-05-10'),
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      username: "Ana Martínez",
      rating: 5,
      comment: "El mejor destino del Caribe. La playa Bávaro es un paraíso.",
      date: new Date('2024-05-05'),
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  newReview = {
    rating: 5,
    comment: ''
  };

  maxRating = 5;

  getAverageRating(): number {
    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / this.reviews.length;
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(this.maxRating - rating).fill(0);
  }

  setRating(rating: number): void {
    this.newReview.rating = rating;
  }

  submitReview(): void {
    if (this.newReview.comment.trim()) {
      const review: Review = {
        id: this.reviews.length + 1,
        username: "Usuario Anónimo",
        rating: this.newReview.rating,
        comment: this.newReview.comment,
        date: new Date(),
        avatar: "https://i.pravatar.cc/150?img=8"
      };

      this.reviews.unshift(review);
      this.newReview = {
        rating: 5,
        comment: ''
      };
    }
  }
}

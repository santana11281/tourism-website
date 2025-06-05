import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Review {
  username: string;
  ratings: {
    overall: number;
    categories: {
      name: string;
      icon: string;
      rating: number;
    }[];
  };
  comment: string;
  date?: Date;
}

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  newReview: Review = {
    username: '',
    ratings: {
      overall: 0,
      categories: [
        { name: 'Limpieza', icon: 'fa-broom', rating: 0 },
        { name: 'Ubicación', icon: 'fa-location-dot', rating: 0 },
        { name: 'Servicios', icon: 'fa-bell-concierge', rating: 0 },
        { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 0 },
        { name: 'Ambiente', icon: 'fa-sun', rating: 0 }
      ]
    },
    comment: ''
  };

  reviews: Review[] = [
    {
      username: 'María García',
      ratings: {
        overall: 5,
        categories: [
          { name: 'Limpieza', icon: 'fa-broom', rating: 5 },
          { name: 'Ubicación', icon: 'fa-location-dot', rating: 4 },
          { name: 'Servicios', icon: 'fa-bell-concierge', rating: 5 },
          { name: 'Calidad-Precio', icon: 'fa-money-bill-wave', rating: 4 },
          { name: 'Ambiente', icon: 'fa-sun', rating: 5 }
        ]
      },
      comment: 'Excelente lugar, muy limpio y el personal muy amable.',
      date: new Date('2024-05-15')
    }
  ];

  setCategoryRating(categoryName: string, rating: number) {
    const category = this.newReview.ratings.categories.find(c => c.name === categoryName);
    if (category) {
      category.rating = rating;
    }
  }

  submitRating() {
    if (this.isValidRating()) {
      const review = {
        ...this.newReview,
        date: new Date()
      };
      this.reviews.unshift(review);

      // Reset form
      this.newReview = {
        username: '',
        ratings: {
          overall: 0,
          categories: this.newReview.ratings.categories.map(cat => ({
            ...cat,
            rating: 0
          }))
        },
        comment: ''
      };
    }
  }

  private isValidRating(): boolean {
    return (
      this.newReview.username.trim() !== '' &&
      this.newReview.ratings.overall > 0 &&
      this.newReview.comment.trim() !== '' &&
      this.newReview.ratings.categories.every(cat => cat.rating > 0)
    );
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyRatingArray(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}

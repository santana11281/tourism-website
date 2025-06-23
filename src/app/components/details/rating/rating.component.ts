import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoredService } from '../../../services/stored.service';

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

  newReview: Review = {
    username: '',
    destinoId: 0,
    date: new Date().toLocaleDateString(),
    ratings: {
      overall: 0,
      categories: [
        { name: 'Gastronomía', rating: 0, icon: 'fa-utensils' },
        { name: 'Alojamiento', rating: 0, icon: 'fa-hotel' },
        { name: 'Ubicación', rating: 0, icon: 'fa-map-marker' }
      ]
    },
    comment: ''
  };

  reviews: Review[] = [];

  constructor(private storedService: StoredService) { }

  ngOnInit(): void {
    this.newReview.destinoId = this.storedService.destinoid;
    this.loadReviews();
  }

  private loadReviews(): void {
    const savedReviews = localStorage.getItem(`reviews_${this.newReview.destinoId}`);
    if (savedReviews) {
      this.reviews = JSON.parse(savedReviews);
    }
  }

  private saveReviews(): void {
    localStorage.setItem(
      `reviews_${this.newReview.destinoId}`,
      JSON.stringify(this.reviews)
    );
  }

  submitRating() {
    const review: Review = {
      ...this.newReview,
      date: new Date().toLocaleDateString()
    };

    this.reviews.unshift(review);
    this.saveReviews();

    // Reset form
    this.newReview = {
      username: '',
      destinoId: this.storedService.destinoid,
      date: new Date().toLocaleDateString(),
      ratings: {
        overall: 0,
        categories: [
          { name: 'Gastronomía', rating: 0, icon: 'fa-utensils' },
          { name: 'Alojamiento', rating: 0, icon: 'fa-hotel' },
          { name: 'Ubicación', rating: 0, icon: 'fa-map-marker' }
        ]
      },
      comment: ''
    };
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  // Sample review data structure
  newReview = {
    username: '',
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

  // Array to store reviews
  reviews = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  submitRating() {
    // Handle form submission
    console.log('Rating submitted:', this.newReview);
  }

  setCategoryRating(categoryName: string, rating: number) {
    const category = this.newReview.ratings.categories.find(c => c.name === categoryName);
    if (category) {
      category.rating = rating;
    }
  }

  defaultAvatarPath = 'assets/images/avatars/user-avatar.jpg';

  getAvatarPath(avatarPath: string | undefined): string {
    //https://img.icons8.com/pastel-glyph/64/teacher-female--v1.png" alt="teacher-female--v1
    let defaultAvatarPath = 'https://img.icons8.com/pastel-glyph/64/teacher-female--v1.png';
    return avatarPath || defaultAvatarPath;
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement) {
      imgElement.src = this.defaultAvatarPath;
    }
  }
}

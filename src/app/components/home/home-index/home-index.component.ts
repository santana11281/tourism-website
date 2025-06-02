import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CardDestinationComponent } from "../card-destination/card-destination.component";

interface Category {
  name: string;
  route: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [CommonModule, RouterModule, CardDestinationComponent],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'recientes',
      route: '/home/recientes',
      icon: 'https://img.icons8.com/?size=100&id=52196&format=png&color=000000',
      label: 'Recientes'
    },
    {
      name: 'populares',
      route: '/home/populares',
      icon: 'https://img.icons8.com/?size=100&id=la2S0ys9gplw&format=png&color=000000',
      label: 'Populares'
    },
    {
      name: 'tendencia',
      route: '/home/tendencia',
      icon: 'https://img.icons8.com/?size=100&id=lhrKPeMFIFdF&format=png&color=000000',
      label: 'Tendencia'
    }
  ];

  selectedCategory: string = 'recientes';

  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial category based on current route
    const currentPath = this.router.url.split('/').pop() || 'recientes';
    this.selectedCategory = currentPath;
  }

  selectCategory(category: Category) {
    this.selectedCategory = category.name;
    this.router.navigate([category.route]);
  }

  isSelected(categoryName: string): boolean {
    return this.selectedCategory === categoryName;
  }

  getSelectedCategoryLabel(): string {
    const category = this.categories.find(cat => cat.name === this.selectedCategory);
    return category ? category.label : '';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Destination {
  id: number;
  name: string;
  province: string;
  category: string;
  description: string;
  mainImage: string;
  gallery: string[];
  rating: number;
  activities: string[];
  highlights: string[];
  weather: string;
  bestTime: string;
}

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent {
  searchTerm: string = '';
  selectedCategory: string = 'Todos';
  categories = ['Todos', 'Playa', 'Montaña', 'Ciudad', 'Isla'];

  destinations: Destination[] = [
    {
      id: 1,
      name: 'Punta Cana',
      province: 'La Altagracia',
      category: 'Playa',
      description: 'Famoso por sus playas de arena blanca, aguas cristalinas y resorts todo incluido.',
      mainImage: 'https://everythingpuntacana.com/wp-content/uploads/2024/08/bavaro-beach-view-850x567.webp',
      gallery: [
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/4c/97.jpg',
        'https://content.r9cdn.net/rimg/dimg/f2/b1/89e06bf7-city-34713-16ed2f2c7f1.jpg'
      ],
      rating: 4.8,
      activities: [
        'Deportes acuáticos',
        'Golf',
        'Excursiones en catamarán',
        'Snorkeling'
      ],
      highlights: [
        'Playa Bávaro',
        'Isla Saona',
        'Parque acuático',
        'Vida nocturna'
      ],
      weather: 'Tropical con temperatura promedio de 27°C',
      bestTime: 'Diciembre a Abril'
    },
    {
      id: 2,
      name: 'Jarabacoa',
      province: 'La Vega',
      category: 'Montaña',
      description: 'La ciudad del eterno primavera, conocida por sus montañas, ríos y cascadas.',
      mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwtenDMKyZgwPGg_xkHU6DwAargqXY4JBPg&s',
      gallery: [
        'https://dominicanexpert.com/wp-content/uploads/jarabacoa-dominican-republic-720x480.jpg',
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7e/a8/85.jpg'
      ],
      rating: 4.6,
      activities: [
        'Rafting',
        'Senderismo',
        'Parapente',
        'Camping'
      ],
      highlights: [
        'Salto Jimenoa',
        'Pico Duarte',
        'Rancho Baiguate',
        'Jardín Botánico'
      ],
      weather: 'Clima templado con temperatura promedio de 22°C',
      bestTime: 'Todo el año'
    },
    {
      id: 3,
      name: 'Santo Domingo',
      province: 'Distrito Nacional',
      category: 'Ciudad',
      description: 'La capital y primera ciudad del Nuevo Mundo, rica en historia y cultura.',
      mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3V_sh_iCg88-k7GChMFEjbxBOpdkdwGZaA&s',
      gallery: [
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7e/a8/85.jpg',
        'https://www.godominicanrepublic.com/wp-content/uploads/2020/11/Food-1-e1660138508929.jpg'
      ],
      rating: 4.5,
      activities: [
        'Tours históricos',
        'Compras',
        'Gastronomía',
        'Vida nocturna'
      ],
      highlights: [
        'Zona Colonial',
        'Alcázar de Colón',
        'Malecón',
        'Los Tres Ojos'
      ],
      weather: 'Tropical con temperatura promedio de 26°C',
      bestTime: 'Noviembre a Marzo'
    }
  ];

  filteredDestinations() {
    return this.destinations
      .filter(dest =>
        this.selectedCategory === 'Todos' ||
        dest.category === this.selectedCategory)
      .filter(dest =>
        this.searchTerm === '' ||
        dest.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dest.province.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}

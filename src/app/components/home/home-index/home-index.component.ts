import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardDestinationComponent } from "../card-destination/card-destination.component";
import { FormsModule } from '@angular/forms';

interface FeaturedDestination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  category: string;
}

interface Statistic {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent {
  searchQuery: string = '';
  selectedCategory: string = 'recientes';
  categories = [
    { name: 'recientes', label: 'Recientes', icon: 'fa-clock' },
    { name: 'populares', label: 'Populares', icon: 'fa-fire-flame-curved' },
    { name: 'tendencia', label: 'Tendencia', icon: 'fa-arrow-trend-up' }
  ];

  statistics: Statistic[] = [
    { value: '500+', label: 'Destinos', icon: 'fa-map-location-dot' },
    { value: '10k+', label: 'Visitantes', icon: 'fa-users' },
    { value: '100+', label: 'Tours', icon: 'fa-compass' },
    { value: '50+', label: 'Guías', icon: 'fa-person-hiking' }
  ];

  featuredDestinations: FeaturedDestination[] = [
    {
      id: 1,
      name: 'Punta Cana',
      image: 'https://res.cloudinary.com/lastminute-contenthub/s--CvRwMKzT--/c_crop,h_3840,w_5760,x_0,y_0/c_limit,h_999999,w_1024/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Americas/Dominican%20Republic/shutterstock_270486656',
      description: 'Descubre las mejores playas del Caribe con aguas cristalinas y arena blanca.',
      rating: 4.8,
      category: 'Playa'
    },
    {
      id: 2,
      name: 'Samaná',
      image: 'https://images.prismic.io/prismic-rd-2/Z-bCkHdAxsiBwEDn_Samana.jpg?auto=format%2Ccompress&fit=max&w=3840',
      description: 'Explora paisajes naturales impresionantes y avistamiento de ballenas.',
      rating: 4.7,
      category: 'Naturaleza'
    },
    {
      id: 3,
      name: 'Santo Domingo',
      image: 'https://images.squarespace-cdn.com/content/v1/590dd4905016e187a50516d7/1536380044832-LED03IMVV8XXZIFBLG4T/Colonial+Zone+Santo+Domingo.jpg?format=1000w',
      description: 'Sumérgete en la historia colonial y la cultura dominicana.',
      rating: 4.6,
      category: 'Ciudad'
    }
  ];

  activities = [
    {
      icon: 'fa-water',
      title: 'Deportes Acuáticos',
      description: 'Disfruta de actividades como snorkel, buceo y surf en nuestras hermosas playas.'
    },
    {
      icon: 'fa-mountain',
      title: 'Aventuras',
      description: 'Explora montañas, cascadas y senderos con guías experimentados.'
    },
    {
      icon: 'fa-utensils',
      title: 'Gastronomía',
      description: 'Descubre la deliciosa cocina dominicana y sus sabores únicos.'
    },
    {
      icon: 'fa-umbrella-beach',
      title: 'Playas',
      description: 'Relájate en las mejores playas del Caribe con aguas cristalinas.'
    }
  ];

  testimonials = [
    {
      name: 'María García',
      location: 'España',
      comment: 'Una experiencia inolvidable. Las playas son increíbles y la gente muy amable.',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5
    },
    {
      name: 'John Smith',
      location: 'Estados Unidos',
      comment: 'Excelente servicio y lugares hermosos. Definitivamente volveré.',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      location: 'México',
      comment: 'La mejor experiencia turística que he tenido. Todo perfectamente organizado.',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5
    }
  ];

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
  }
}

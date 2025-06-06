import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DestinosService, Destino } from '../../../services/destinos.service';
import { DestinyHomeCardComponent } from '../../destiny-home-card/destiny-home-card.component';
import { DestinosComponent } from "../../destinos/destinos.component";

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DestinyHomeCardComponent
],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.css'
})
export class HomeIndexComponent implements OnInit {
  destinos: Destino[] = [];
  filteredDestinos: Destino[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'Todos';
  categories: string[] = ['Todos'];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private destinosService: DestinosService) {}



  statistics = [
    { value: '500+', label: 'Destinos', icon: 'fa-map' },
    { value: '10k+', label: 'Visitantes', icon: 'fa-users' },
    { value: '100+', label: 'Tours', icon: 'fa-compass' },
    { value: '50+', label: 'Guías', icon: 'fa-id-card' }
  ];

/*   featuredDestinations: FeaturedDestination[] = [
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
  ]; */

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


  ngOnInit(): void {
    this.loadDestinos();
  }

  loadDestinos(): void {
    this.isLoading = true;
    this.error = null;

    this.destinosService.getDestinos().subscribe({
      next: (response) => {
        this.destinos = response;
        console.log('Destinos loaded:', this.destinos);
        this.updateCategories();
        this.filterDestinos();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching destinos:', error);
        this.error = error.message || 'Error al cargar los destinos. Por favor, intente nuevamente.';
        this.isLoading = false;
      }
    });
  }

  updateCategories(): void {
    const uniqueCategories = new Set(this.destinos.map(d => d.tipo));
    this.categories = ['Todos', ...Array.from(uniqueCategories)];
  }

  filterDestinos(): void {
    this.filteredDestinos = this.destinos.filter(destino => {
      const matchesCategory = this.selectedCategory === 'Todos' || destino.tipo === this.selectedCategory;
      const matchesSearch = this.searchQuery === '' ||
        destino.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        destino.ciudad.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        destino.provincia.toLowerCase().includes(this.searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  onSearchChange(): void {
    this.filterDestinos();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterDestinos();
  }

  retry(): void {
    this.loadDestinos();
  }
}

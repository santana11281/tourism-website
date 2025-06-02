import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  categories = ['Todas', 'Playas', 'Actividades', 'Hoteles', 'Gastronomía'];
  selectedCategory = 'Todas';

  images = [
    {
      url: 'https://everythingpuntacana.com/wp-content/uploads/2024/08/bavaro-beach-view-850x567.webp',
      title: 'Playa Bávaro',
      category: 'Playas',
      description: 'Hermosa playa de arena blanca con aguas cristalinas'
    },
    {
      url: 'https://content.r9cdn.net/rimg/dimg/f2/b1/89e06bf7-city-34713-16ed2f2c7f1.jpg',
      title: 'Resort Todo Incluido',
      category: 'Hoteles',
      description: 'Lujosos resorts frente al mar'
    },
    {
      url: 'https://www.vistaalmar.es/images/stories/fotos-414/natacion.jpg',
      title: 'Deportes Acuáticos',
      category: 'Actividades',
      description: 'Diversas actividades acuáticas disponibles'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Playa_Macao_Dominican_Republic.jpg',
      title: 'Playa Macao',
      category: 'Playas',
      description: 'Playa perfecta para el surf'
    },
    {
      url: 'https://admin.catamarans-lagoon.com/sites/default/files/2025-01/cover-owner-story-boris-diaw.jpg',
      title: 'Catamarán',
      category: 'Actividades',
      description: 'Excursiones en catamarán por el caribe'
    },
    {
      url: 'https://cdn.sanity.io/images/atvntylo/production/f62a551c8c2ed40a755dc65c109ac87b3984c49b-1080x720.webp?w=3840&q=65&fit=clip&auto=format',
      title: 'Gastronomía Local',
      category: 'Gastronomía',
      description: 'Deliciosa comida dominicana y internacional'
    },
    {
      url: 'https://www.fluidra.com/wp-content/uploads/2021/07/infinitas.webp',
      title: 'Piscinas Infinitas',
      category: 'Hoteles',
      description: 'Impresionantes piscinas con vista al mar'
    },
    {
      url: 'https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/pandora-bucket/uploads/2024/11/SaveClip.App_434224954_1122011359112581_428108138976873466_n-1024x683.jpg',
      title: 'Restaurantes',
      category: 'Gastronomía',
      description: 'Variedad de restaurantes gourmet'
    }
  ];

  filteredImages() {
    return this.selectedCategory === 'Todas'
      ? this.images
      : this.images.filter(img => img.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}

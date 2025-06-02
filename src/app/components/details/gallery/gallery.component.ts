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
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/4c/97.jpg',
      title: 'Deportes Acuáticos',
      category: 'Actividades',
      description: 'Diversas actividades acuáticas disponibles'
    },
    {
      url: 'https://www.civitatis.com/blog/wp-content/uploads/2019/10/playa-macao-punta-cana.jpg',
      title: 'Playa Macao',
      category: 'Playas',
      description: 'Playa perfecta para el surf'
    },
    {
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/8f/95.jpg',
      title: 'Catamarán',
      category: 'Actividades',
      description: 'Excursiones en catamarán por el caribe'
    },
    {
      url: 'https://media.istockphoto.com/id/1324689485/es/foto/cena-buffet-en-un-hotel-resort-de-lujo.jpg',
      title: 'Gastronomía Local',
      category: 'Gastronomía',
      description: 'Deliciosa comida dominicana y internacional'
    },
    {
      url: 'https://i.travelapi.com/hotels/1000000/560000/558800/558749/5c566275_z.jpg',
      title: 'Piscinas Infinitas',
      category: 'Hoteles',
      description: 'Impresionantes piscinas con vista al mar'
    },
    {
      url: 'https://www.godominicanrepublic.com/wp-content/uploads/2020/11/Food-1-e1660138508929.jpg',
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

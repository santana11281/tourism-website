import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UserExperience {
  id: number;
  userName: string;
  userImage: string;
  location: string;
  date: Date;
  rating: number;
  review: string;
  images: string[];
  likes: number;
  comments: number;
  category: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  categories = ['Todas', 'Playas', 'Monumentos', 'Naturaleza', 'Cultura Local'];
  selectedCategory: string = 'Todas';

  experiences: UserExperience[] = [
    {
      id: 1,
      userName: "María Torres",
      userImage: "https://i.pravatar.cc/150?img=1",
      location: "Playa Bávaro, Punta Cana",
      date: new Date('2024-05-15'),
      rating: 5,
      review: "¡Un paraíso en la tierra! Las aguas cristalinas y la arena blanca hacen de esta playa un lugar mágico. El servicio en los hoteles es excelente.",
      images: [
        "https://cdn.prod.website-files.com/62697bd1c989d939564add63/62697bd1c989d936204ae0e2_Playa%20Ba%CC%81varo%2C%20Punta%20Cana%20005.jpg",
        "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1392/Playa-Bavaro-Punta-Cana-Garden-Hotels.jpg"
      ],
      likes: 234,
      comments: 45,
      category: "Playas"
    },
    {
      id: 2,
      userName: "Carlos Méndez",
      userImage: "https://i.pravatar.cc/150?img=2",
      location: "Zona Colonial, Santo Domingo",
      date: new Date('2024-05-10'),
      rating: 4,
      review: "Un viaje al pasado en el corazón de Santo Domingo. La arquitectura colonial y los museos son impresionantes. No se pierdan el recorrido por las primeras calles de América.",
      images: [
        "https://destinoysabor.com/blog/wp-content/uploads/2019/02/Turismo-familiar-en-Santo-Domingo.jpg"
      ],
      likes: 178,
      comments: 32,
      category: "Monumentos"
    },
    {
      id: 3,
      userName: "Ana Ramírez",
      userImage: "https://i.pravatar.cc/150?img=3",
      location: "Salto El Limón, Samaná",
      date: new Date('2024-05-05'),
      rating: 5,
      review: "La caminata hasta la cascada vale totalmente la pena. El paisaje es espectacular y el agua es refrescante. Los guías locales son muy amables y conocedores.",
      images: [
        "https://wetravelandblog.com/wp-content/uploads/2014/03/Limon.jpg",
        "https://images.visitarepublicadominicana.org/salto-el-limon-samana.jpg"
      ],
      likes: 312,
      comments: 67,
      category: "Naturaleza"
    }
  ];

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  getFilteredExperiences() {
    return this.selectedCategory === 'Todas'
      ? this.experiences
      : this.experiences.filter(exp => exp.category === this.selectedCategory);
  }

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('es-DO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  likeExperience(experience: UserExperience) {
    experience.likes++;
  }
}

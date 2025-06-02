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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Playa_Maya%2C_Ko_Phi_Phi%2C_Tailandia%2C_2013-08-19%2C_DD_10.JPG/1200px-Playa_Maya%2C_Ko_Phi_Phi%2C_Tailandia%2C_2013-08-19%2C_DD_10.JPG",
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/27/full/1711536885-3711.jpg?im=FitAndFill=(826,465)"
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
        "https://images.forbesindia.com/media/images/2021/Oct/img_169601_indiantourist.jpg"
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
        "https://media.cnn.com/api/v1/images/stellar/prod/230828105142-01-instagram-respectful-tourism-top.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
        "https://www.usatoday.com/gcdn/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2019/05/25/USATODAY/usatsports/247WallSt.com-247WS-549930-imageforentry1-pc0.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
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

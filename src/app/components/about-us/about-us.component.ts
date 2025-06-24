import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent   {



  teamMembers: TeamMember[] = [
    {
      name: 'Michael Santana',
      role: 'CEO & Fundadora',
      image: 'http://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png',
      description: 'Apasionado por mostrar las bellezas de República Dominicana al mundo.'
    },
    {
      name: 'Jose Brito',
      role: 'Director de Operaciones',
      image: 'http://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png',
      description: 'Experto en turismo con más de 10 años de experiencia en el sector.'
    },
    {
      name: 'Luis Medina',
      role: 'Directora de Marketing',
      image: 'http://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png',
      description: 'Especialista en promoción turística y estrategias digitales.'
    },
    {
      name: 'Mauricio Frias',
      role: 'Gerente de Atención al Cliente',
      image: 'http://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png',
      description: 'Comprometido con brindar un servicio excepcional a nuestros clientes.'
    }
  ];

  companyValues: CompanyValue[] = [
    {
      icon: 'fa-heart',
      title: 'Pasión por el Turismo',
      description: 'Nos apasiona mostrar los tesoros escondidos de nuestro país.'
    },
    {
      icon: 'fa-handshake-o',
      title: 'Compromiso con la Calidad',
      description: 'Garantizamos experiencias únicas y memorables.'
    },
    {
      icon: 'fa-leaf',
      title: 'Turismo Sostenible',
      description: 'Promovemos un turismo responsable y respetuoso con el medio ambiente.'
    }
  ];

  mission: string = 'Nuestra misión es promover y facilitar el descubrimiento de los destinos más hermosos de República Dominicana, conectando viajeros con experiencias auténticas y memorables.';

  vision: string = 'Ser la plataforma líder en información turística de República Dominicana, revolucionando la forma en que los viajeros descubren y experimentan nuestro país.';
}

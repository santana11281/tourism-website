import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Destino {
  id: number;
  nombre: string;
  ciudad: string;
  provincia: string;
  tipo: string;
  descripcion: string;
  imagen_portada_url: string;
  imagen: string;
  rating: number;
}

@Component({
  selector: 'app-destiny-home-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destiny-home-card.component.html',
  styleUrl: './destiny-home-card.component.css'
})
export class DestinyHomeCardComponent {
  @Input() destino!: Destino;

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}

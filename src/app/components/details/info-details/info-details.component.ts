import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.css'
})
export class InfoDetailsComponent {
  destination = {
    name: 'Punta Cana',
    province: 'La Altagracia',
    description: 'Punta Cana es un destino turístico de fama mundial ubicado en el extremo oriental de la República Dominicana.',
    climate: 'Tropical con temperaturas promedio de 28°C',
    activities: [
      'Playas de arena blanca',
      'Deportes acuáticos',
      'Golf de clase mundial',
      'Excursiones en catamarán',
      'Visitas a parques acuáticos'
    ],
    bestTimeToVisit: 'De diciembre a abril (temporada seca)',
    transportation: ['Aeropuerto Internacional de Punta Cana', 'Taxis', 'Servicios de transporte del hotel'],
    accommodation: ['Resorts todo incluido', 'Hoteles boutique', 'Villas privadas']
  };
}

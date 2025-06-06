import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DestinosService } from '../../../services/destinos.service';
import { Activity } from '../../../../models/Activity';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.css',
})
export class InfoDetailsComponent implements OnInit {
  destination = {
    id: 1, // This should come from route params
    name: 'Punta Cana',
    province: 'La Altagracia',
    description:
      'Punta Cana es un destino turístico de fama mundial ubicado en el extremo oriental de la República Dominicana.',
    climate: 'Tropical con temperaturas promedio de 28°C',
    bestTimeToVisit: 'De diciembre a abril (temporada seca)',
    transportation: [
      'Aeropuerto Internacional de Punta Cana',
      'Taxis',
      'Servicios de transporte del hotel',
    ],
    accommodation: [
      'Resorts todo incluido',
      'Hoteles boutique',
      'Villas privadas',
    ],
  };

  activities: Activity[] = [];

  constructor(
    private destinosService: DestinosService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    let destinationId = this.router.snapshot.params['id'];
    console.log('Destination ID:', this.router.snapshot);
    console.log('Destination ID:', destinationId);
    this.loadActivities(destinationId);
  }

  loadActivities(destinationId: number) {
    this.destinosService.getActivities(destinationId).subscribe({
      next: (activities) => {
        console.log('Activities loaded:', activities);
        this.activities = activities;
      },
      error: (error) => {
        console.error('Error loading activities:', error);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinosService } from '../../../services/destinos.service';
import { Activity } from '../../../../models/Activity';
import { Climate } from '../../../../models/Climate';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.css'
})
export class InfoDetailsComponent implements OnInit {
  destination = {
    id: 1, // This should come from route params
    name: 'Punta Cana',
    province: 'La Altagracia',
    description: 'Punta Cana es un destino turístico de fama mundial ubicado en el extremo oriental de la República Dominicana.',
    bestTimeToVisit: 'De diciembre a abril (temporada seca)',
    transportation: ['Aeropuerto Internacional de Punta Cana', 'Taxis', 'Servicios de transporte del hotel'],
    accommodation: ['Resorts todo incluido', 'Hoteles boutique', 'Villas privadas']
  };

  activities: Activity[] = [];
  climate: Climate | null = null;

  constructor(private destinosService: DestinosService) {}

  ngOnInit() {
    this.loadActivities();
    this.loadClimate();
  }

  loadActivities() {
    this.destinosService.getActivities(this.destination.id).subscribe({
      next: (activities) => {
        this.activities = activities;
      },
      error: (error) => {
        console.error('Error loading activities:', error);
      }
    });
  }

  loadClimate() {
    this.destinosService.getClima(this.destination.id).subscribe({
      next: (climate) => {
        this.climate = climate;
      },
      error: (error) => {
        console.error('Error loading climate:', error);
      }
    });
  }
}

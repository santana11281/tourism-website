import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinosService, MejorEpoca, Transporte, Alojamiento, Detalle } from '../../../services/destinos.service';
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
  destinoId = 1; // This should come from route params
  detalle: Detalle | null = null;

  activities: Activity[] = [];
  climate: Climate | null = null;
  mejorEpoca: MejorEpoca | null = null;
  transporte: Transporte | null = null;
  alojamiento: Alojamiento | null = null;

  constructor(private destinosService: DestinosService) {}

  ngOnInit() {
    this.loadDetalle();
    this.loadActivities();
    this.loadClimate();
    this.loadMejorEpoca();
    this.loadTransporte();
    this.loadAlojamiento();
  }

  loadDetalle() {
    this.destinosService.getDetalle(this.destinoId).subscribe({
      next: (detalle) => {
        this.detalle = detalle;
        console.log('Detalle loaded:', detalle);
      },
      error: (error) => {
        console.error('Error loading detalle:', error);
      }
    });
  }

  loadActivities() {
    this.destinosService.getActivities(this.destinoId).subscribe({
      next: (activities) => {
        this.activities = activities;
      },
      error: (error) => {
        console.error('Error loading activities:', error);
      }
    });
  }

  loadClimate() {
    this.destinosService.getClima(this.destinoId).subscribe({
      next: (climate) => {
        this.climate = climate;
      },
      error: (error) => {
        console.error('Error loading climate:', error);
      }
    });
  }

  loadMejorEpoca() {
    this.destinosService.getMejorEpoca(this.destinoId).subscribe({
      next: (mejorEpoca) => {
        this.mejorEpoca = mejorEpoca;
        console.log('Mejor epoca loaded:', mejorEpoca);
      },
      error: (error) => {
        console.error('Error loading mejor epoca:', error);
      }
    });
  }

  loadTransporte() {
    this.destinosService.getTransporte(this.destinoId).subscribe({
      next: (transportes) => {
        this.transporte = transportes;
        console.log('Transportes loaded:', transportes);
      },
      error: (error) => {
        console.error('Error loading transporte:', error);
      }
    });
  }

  loadAlojamiento() {
    this.destinosService.getAlojamiento(this.destinoId).subscribe({
      next: (alojamiento) => {
        this.alojamiento = alojamiento;
        console.log('Alojamiento loaded:', alojamiento);
      },
      error: (error) => {
        console.error('Error loading alojamiento:', error);
      }
    });
  }
}

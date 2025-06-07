import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinosService, MejorEpoca, Transporte, Alojamiento, Detalle } from '../../../services/destinos.service';
import { StoredService } from '../../../services/stored.service';
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
  detalle: Detalle | null = null;

  activities: Activity[] = [];
  climate: Climate | null = null;
  mejorEpoca: MejorEpoca | null = null;
  transporte: Transporte | null = null;
  alojamiento: Alojamiento | null = null;

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService
  ) {}

  ngOnInit() {
    // Set initial destinoid
    this.storedService.destinoid = 1;
    this.loadDetalle();
    this.loadActivities();
    this.loadClimate();
    this.loadMejorEpoca();
    this.loadTransporte();
    this.loadAlojamiento();
  }

  loadDetalle() {
    this.destinosService.getDetalle(this.storedService.destinoid).subscribe({
      next: (detalle) => {
        this.detalle = detalle;
        console.log('Detalle loaded:', detalle);
      },
      error: () => {
      }
    });
  }

  loadActivities() {
    this.destinosService.getActivities(this.storedService.destinoid).subscribe({
      next: (activities) => {
        this.activities = activities;
      },
      error: () => {
      }
    });
  }

  loadClimate() {
    this.destinosService.getClima(this.storedService.destinoid).subscribe({
      next: (climate) => {
        this.climate = climate;
      },
      error: () => {
      }
    });
  }

  loadMejorEpoca() {
    this.destinosService.getMejorEpoca(this.storedService.destinoid).subscribe({
      next: (mejorEpoca) => {
        this.mejorEpoca = mejorEpoca;
      },
      error: () => {
      }
    });
  }

  loadTransporte() {
    this.destinosService.getTransporte(this.storedService.destinoid).subscribe({
      next: (transportes) => {
        this.transporte = transportes;
      },
      error: () => {
      }
    });
  }

  loadAlojamiento() {
    this.destinosService.getAlojamiento(this.storedService.destinoid).subscribe({
      next: (alojamiento) => {
        this.alojamiento = alojamiento;
      },
      error: () => {
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DestinosService, MejorEpoca, Transporte, Alojamiento } from '../../../services/destinos.service';
import { StoredService } from '../../../services/stored.service';
import { Activity } from '../../../../models/Activity';
import { Climate } from '../../../../models/Climate';
import { Detalle } from '../../../models/Detalle';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-details.component.html',
  styleUrl: './info-details.component.css'
})
export class InfoDetailsComponent implements OnInit {
  dataDetalle: Detalle | null = null;

  activities: Activity[] = [];
  climate: Climate | null = null;
  mejorEpoca: MejorEpoca | null = null;
  transporte: Transporte | null = null;
  alojamiento: Alojamiento | null = null;
  isLoading: boolean = true;

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    // Set initial destinoid
    this.storedService.destinoid = this.router.snapshot.params['id'];
    this.loadDetalle();
    this.loadActivities();
    this.loadClimate();
    this.loadMejorEpoca();
    this.loadTransporte();
    this.loadAlojamiento();
  }

  loadDetalle() {
    this.isLoading = true;
    this.destinosService.getDetalle(this.storedService.destinoid).subscribe({
      next: (detalle) => {
        this.dataDetalle = detalle;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadActivities() {
    this.isLoading = true;
    this.destinosService.getActivities(this.storedService.destinoid).subscribe({
      next: (activities) => {
        this.activities = activities;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadClimate() {
    this.isLoading = true;
    this.destinosService.getClima(this.storedService.destinoid).subscribe({
      next: (climate) => {
        this.climate = climate;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadMejorEpoca() {
    this.isLoading = true;
    this.destinosService.getMejorEpoca(this.storedService.destinoid).subscribe({
      next: (mejorEpoca) => {
        this.mejorEpoca = mejorEpoca;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadTransporte() {
    this.isLoading = true;
    this.destinosService.getTransporte(this.storedService.destinoid).subscribe({
      next: (transportes) => {
        this.transporte = transportes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  loadAlojamiento() {
    this.isLoading = true;
    this.destinosService.getAlojamiento(this.storedService.destinoid).subscribe({
      next: (alojamiento) => {
        this.alojamiento = alojamiento;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}

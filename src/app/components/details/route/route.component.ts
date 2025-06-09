import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '../../../models/Route';
import { StoredService } from '../../../services/stored.service';
import { DestinosService } from '../../../services/destinos.service';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent implements OnInit {
  routes: Route[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const destinoId = this.storedService.destinoid;
    if (destinoId) {
      this.loadRoutes(destinoId);
    }
  }

  private loadRoutes(destinoId: number) {
    this.loading = true;
    this.error = null;

    this.destinosService.getRutas(destinoId).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.routes = [data[0]];
        } else {
          this.error = 'No se encontraron rutas para este destino.';
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading routes:', error);
        this.error = 'Error cargando las rutas. Por favor intente más tarde.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}

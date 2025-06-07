import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DestinosService, Detalle } from '../../../services/destinos.service';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css',
})
export class DetailsContainerComponent implements OnInit {
  destinationId: string | null = null;
  detalle: Detalle | null = null;

  constructor(
    private router: ActivatedRoute,
    private destinosService: DestinosService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
              console.log('details-container***params', params);

      this.destinationId = params['id'];
      if (this.destinationId) {
        this.loadDetalle();
      }
    });
            console.log('details-container***Destination ID:', this.destinationId);

  }

  loadDetalle() {
    if (this.destinationId) {
      this.destinosService.getDetalle(Number(this.destinationId)).subscribe({
        next: (detalle) => {
          this.detalle = detalle;
          console.log('Detalle loaded:', detalle);
        },
        error: (error) => {
          console.error('Error loading detalle:', error);
        }
      });
    }
  }
}

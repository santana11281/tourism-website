import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DestinosService, Detalle } from '../../../services/destinos.service';
import { StoredService } from '../../../services/stored.service';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css',
})
export class DetailsContainerComponent implements OnInit {
  detalle: Detalle | null = null;

  get destinoId(): number {
    return this.storedService.destinoid;
  }

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService
  ) {}

  ngOnInit(): void {
    this.loadDetalle(this.storedService.destinoid);
  }

  loadDetalle(id: number) {
    this.destinosService.getDetalle(id).subscribe({
      next: (detalle) => {
        this.detalle = detalle;
      },
      error: () => {
      }
    });
  }
}

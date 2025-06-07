import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
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

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService
  ) {}

  ngOnInit(): void {
    // Get id from url and use stored service
this.storedService.destinoid = Number(this.storedService.destinoid) || 1; // Default to 1 if not set
    this.loadDetalle(this.storedService.destinoid);
    console.log('Stored destinoid:', this.storedService.destinoid);
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

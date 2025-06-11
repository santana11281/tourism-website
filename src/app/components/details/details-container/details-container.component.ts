import { Component, effect, inject, OnInit } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DestinosService } from '../../../services/destinos.service';
import { StoredService } from '../../../services/stored.service';
import { Detalle } from '../../../models/Detalle';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css',
})
export class DetailsContainerComponent implements OnInit {
  dataDetalle: Detalle | null = null;
  private storedService: StoredService = inject(StoredService);
  private destinosService: DestinosService = inject(DestinosService);
 destinoId: number = 0; // Initialize with stored ID



  constructor() {



  }

  ngOnInit(): void {

    this.storedService.destinoidChanges.subscribe((id) => {
      console.log('%cDetailsContainerComponent: ', 'color: blue; font-weight: bold;', id);
      if (id) {
        this.destinoId = id; // Update local destinoId
        this.loadDetalle(id);
      } else {
        console.warn('No destino ID found, cannot load details.');
      }
    });


  }

  loadDetalle(id: number) {
    this.destinosService.getDetalle(id).subscribe({
      next: (detalle) => {
        this.dataDetalle = detalle;
        console.log('%cDetailsContainerComponent: ', 'color: green; font-weight: bold;', this.dataDetalle);
      },
      error: () => {
      }
    });
  }
}

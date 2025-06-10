import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
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

  get destinoId(): number {
    return this.storedService.destinoid;
  }

  constructor(
    private destinosService: DestinosService,
    private storedService: StoredService,
    private cdr: ChangeDetectorRef,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
     console.log("%c "+"this.dataDetalle, "+"color: red; font-weight: bold;");
     this.router.params.subscribe(params => {
      const id = +params['id'];
      console.log("%c "+"id: "+id, "color: blue; font-weight: bold;");
      if (id) {
        this.storedService.destinoid = id;
      }
    }
    );
    this.loadDetalle(this.storedService.destinoid);
  }

  loadDetalle(id: number) {
    this.destinosService.getDetalle(id).subscribe({
      next: (detalle) => {
        this.dataDetalle = detalle;
      },
      error: () => {
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css',
})
export class DetailsContainerComponent implements OnInit {
  destinationId: string | null = null;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    //get id from url
    this.router.params.subscribe((params) => {
      this.destinationId = params['id'];
    });
  }
}

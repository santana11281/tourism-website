import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details-container',
  imports: [],
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

import { Component } from '@angular/core';
import { HomeContainerComponent } from "../home/home-container/home-container.component";

@Component({
  selector: 'app-app-container',
  imports: [HomeContainerComponent],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {

}

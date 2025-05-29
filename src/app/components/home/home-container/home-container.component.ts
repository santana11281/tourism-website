import { Component } from '@angular/core';
import { HomeIndexComponent } from "../home-index/home-index.component";


@Component({
  selector: 'app-home-container',
  imports: [HomeIndexComponent],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.css'
})
export class HomeContainerComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route.component.html',
  styleUrl: './route.component.css'
})
export class RouteComponent {
  route = {
    origin: 'Santo Domingo',
    destination: 'Punta Cana',
    totalDistance: '200 km',
    estimatedTime: '2 horas 30 minutos',
    steps: [
      {
        point: 'Santo Domingo',
        description: 'Salida desde Santo Domingo',
        time: '0:00',
        icon: 'fa-city'
      },
      {
        point: 'San Pedro de Macorís',
        description: 'Paso por San Pedro de Macorís. Parada recomendada para descanso.',
        time: '1:00',
        icon: 'fa-coffee'
      },
      {
        point: 'La Romana',
        description: 'Atravesar La Romana. Oportunidad para visitar Altos de Chavón.',
        time: '1:45',
        icon: 'fa-landmark'
      },
      {
        point: 'Punta Cana',
        description: 'Llegada a Punta Cana. Dirígete a la zona hotelera.',
        time: '2:30',
        icon: 'fa-umbrella-beach'
      }
    ],
    transportOptions: [
      {
        type: 'Carro privado',
        price: '$50-70',
        duration: '2h 30min',
        icon: 'fa-car'
      },
      {
        type: 'Autobús',
        price: '$15-25',
        duration: '3h',
        icon: 'fa-bus'
      },
      {
        type: 'Transfer privado',
        price: '$80-100',
        duration: '2h 30min',
        icon: 'fa-shuttle-van'
      }
    ],
    tips: [
      'Salir temprano para evitar el tráfico',
      'Llevar suficiente agua y snacks',
      'Mantener efectivo para peajes',
      'Revisar el clima antes de partir'
    ]
  };
}

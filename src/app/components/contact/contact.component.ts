import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo: ContactInfo[] = [
    {
      icon: 'fa-location-dot',
      title: 'Nuestra Ubicación',
      details: [
        'Av. Abraham Lincoln 1000',
        'Santo Domingo, República Dominicana'
      ]
    },
    {
      icon: 'fa-phone',
      title: 'Teléfonos',
      details: [
        '+1 (809) 555-0123',
        '+1 (809) 555-0124'
      ]
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      details: [
        'info@tourismrd.com',
        'support@tourismrd.com'
      ]
    },
    {
      icon: 'fa-clock',
      title: 'Horario',
      details: [
        'Lunes - Viernes: 9:00 AM - 6:00 PM',
        'Sábados: 9:00 AM - 1:00 PM'
      ]
    }
  ];

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}

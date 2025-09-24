import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  galleryImages = [
    { icon: 'local_hospital', title: 'Hospital Exterior', description: 'Modern hospital building with state-of-the-art architecture' },
    { icon: 'hotel', title: 'Patient Rooms', description: 'Comfortable and well-equipped patient accommodation' },
    { icon: 'medical_services', title: 'Operation Theater', description: 'Advanced surgical facilities with latest technology' },
    { icon: 'biotech', title: 'Laboratory', description: 'Fully equipped diagnostic and pathology lab' },
    { icon: 'emergency', title: 'Emergency Ward', description: '24/7 emergency care with rapid response team' },
    { icon: 'medication', title: 'Pharmacy', description: '24-hour pharmacy with comprehensive medication stock' },
    { icon: '🏃', title: 'Physiotherapy', description: 'Modern rehabilitation and physiotherapy center' },
    { icon: '🤱', title: 'Birthing Suite', description: 'Comfortable and safe delivery rooms for mothers' },
    { icon: '🧠', title: 'ICU', description: 'Intensive care unit with advanced monitoring systems' }
  ];
}
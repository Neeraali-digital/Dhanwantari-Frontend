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
    { icon: 'local_hospital', title: 'Hospital Exterior', description: 'Modern hospital building with state-of-the-art architecture', imageUrl: 'assets/images/hospital_exterior.jpg' }, // Placeholder
    { icon: 'hotel', title: 'Patient Rooms', description: 'Comfortable and well-equipped patient accommodation', imageUrl: 'assets/images/patient_rooms.jpg' }, // Placeholder
    { icon: 'medical_services', title: 'Operation Theater', description: 'Advanced surgical facilities with latest technology', imageUrl: 'assets/images/surgery.png' },
    { icon: 'biotech', title: 'Laboratory', description: 'Fully equipped diagnostic and pathology lab', imageUrl: 'assets/images/laboratory.jpg' }, // Placeholder
    { icon: 'emergency', title: 'Emergency Ward', description: '24/7 emergency services', imageUrl: 'assets/images/emergency.png' },
    { icon: 'medication', title: 'Pharmacy', description: '24-hour pharmacy with comprehensive medication stock', imageUrl: 'assets/images/pharmacy.jpg' }, // Placeholder
    { icon: 'fitness_center', title: 'Physiotherapy', description: 'Modern rehabilitation and physiotherapy center', imageUrl: 'assets/images/physiotherapy.jpg' }, // Placeholder
    { icon: 'pregnant_woman', title: 'Birthing Suite', description: 'Comfortable and safe delivery rooms for mothers', imageUrl: 'assets/images/obstetrics_and_gynecology.png' },
    { icon: 'monitor_heart', title: 'ICU', description: 'Intensive care unit with advanced monitoring systems', imageUrl: 'assets/images/critical_care.png' }
  ];
}
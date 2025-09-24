import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  showAllServices = false;

  allServices = [
    {
      icon: 'health_and_safety',
      title: 'General Medicine',
      description: 'Primary healthcare services including routine check-ups, preventive care, chronic disease management, and health screenings for all ages.',
      gradient: 'linear-gradient(135deg, #50bfb5 0%, #3da99f 100%)',
      color: '#50bfb5',
      highlighted: true
    },
    {
      icon: 'local_hospital',
      title: 'Critical Care',
      description: 'Intensive care unit with advanced monitoring, life support systems, and specialized medical team for critically ill patients.',
      gradient: 'linear-gradient(135deg, #50bfb5 0%, #3da99f 100%)',
      color: '#50bfb5',
      highlighted: true
    },
    {
      icon: 'pregnant_woman',
      title: 'Obstetrics and Gynecology',
      description: 'Comprehensive women\'s health services including prenatal care, delivery, gynecological treatments, and reproductive health.',
      gradient: 'linear-gradient(135deg, #50bfb5 0%, #3da99f 100%)',
      color: '#50bfb5'
    },
    {
      icon: 'elderly',
      title: 'Geriatrics',
      description: 'Specialized healthcare for elderly patients focusing on age-related conditions, mobility, cognitive health, and quality of life.',
      gradient: 'linear-gradient(135deg, #50bfb5 0%, #3da99f 100%)',
      color: '#50bfb5'
    },
    {
      icon: 'accessibility',
      title: 'Physiotherapy',
      description: 'Rehabilitation services for injury recovery, pain management, mobility improvement, and sports injury treatment.',
      gradient: 'linear-gradient(135deg, #50bfb5 0%, #3da99f 100%)',
      color: '#50bfb5'
    },
    {
      icon: 'monitor_heart',
      title: 'Ultrasound Scanning',
      description: 'Advanced ultrasound imaging services for diagnostic purposes with latest technology and experienced technicians.',
      gradient: 'linear-gradient(135deg, #1b3563 0%, #1e40af 100%)',
      color: '#1b3563'
    },
    {
      icon: 'medical_information',
      title: 'X-ray',
      description: 'Digital X-ray services for bone fractures, chest imaging, and other diagnostic needs with quick results.',
      gradient: 'linear-gradient(135deg, #1b3563 0%, #1e40af 100%)',
      color: '#1b3563'
    },
    {
      icon: 'biotech',
      title: 'Laboratory',
      description: 'Complete laboratory testing services including blood tests, urine analysis, and other diagnostic tests with accurate results.',
      gradient: 'linear-gradient(135deg, #1b3563 0%, #1e40af 100%)',
      color: '#1b3563'
    }
  ];

  get displayedServices() {
    return this.showAllServices ? this.allServices : this.allServices.slice(0, 6);
  }

  toggleServices() {
    this.showAllServices = !this.showAllServices;
  }
}
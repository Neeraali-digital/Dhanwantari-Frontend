import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../core/services/service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showAllServices = false;
  allServices: any[] = [];
  loading = false;

  // Static services
  staticServices = [
    {
      id: 'static-1',
      name: 'General Medicine',
      description: 'Primary healthcare services including routine check-ups, preventive care, chronic disease management, and health screenings for all ages.',
      icon: 'medical_services'
    },
    {
      id: 'static-2',
      name: 'Critical Care',
      description: 'Intensive care unit with advanced monitoring, life support systems, and specialized medical team for critically ill patients.',
      icon: 'monitor_heart'
    },
    {
      id: 'static-3',
      name: 'Obstetrics and Gynecology',
      description: 'Comprehensive womens health services including prenatal care, delivery, gynecological treatments, and reproductive health.',
      icon: 'pregnant_woman'
    },
    {
      id: 'static-4',
      name: 'Geriatrics',
      description: 'Specialized healthcare for elderly patients focusing on age-related conditions, mobility, cognitive health, and quality of life.',
      icon: 'elderly_woman'
    },
    {
      id: 'static-5',
      name: 'Physiotherapy',
      description: 'Rehabilitation services for injury recovery, pain management, mobility improvement, and sports injury treatment.',
      icon: 'fitness_center'
    },
    {
      id: 'static-6',
      name: 'Ultrasound Scanning',
      description: 'Advanced ultrasound imaging services for diagnostic purposes with latest technology and experienced technicians.',
      icon: 'analytics'
    },
    {
      id: 'static-7',
      name: 'X-ray',
      description: 'Digital X-ray services for bone fractures, chest imaging, and other diagnostic needs with quick results.',
      icon: 'fullscreen'
    },
    {
      id: 'static-8',
      name: 'Laboratory',
      description: 'Complete laboratory testing services including blood tests, urine analysis, and other diagnostic tests with accurate results.',
      icon: 'biotech'
    }
  ];

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.loading = true;
    // Start with static services
    this.allServices = [...this.staticServices];

    // Load dynamic services and append them
    this.serviceService.getServices().subscribe({
      next: (services) => {
        const dynamicServices = services.map(service => ({
          ...service,
          icon: service.icon || 'health_and_safety'
        }));
        this.allServices = [...this.staticServices, ...dynamicServices];
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load dynamic services', err);
        // Keep static services even if dynamic load fails
        this.loading = false;
      }
    });
  }

  get displayedServices() {
    return this.showAllServices ? this.allServices : this.allServices.slice(0, 6);
  }

  toggleServices() {
    this.showAllServices = !this.showAllServices;
  }
}

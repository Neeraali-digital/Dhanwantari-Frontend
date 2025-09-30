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
      name: 'Cardiology',
      description: 'Comprehensive heart care and cardiovascular treatments',
      icon: 'favorite'
    },
    {
      id: 'static-2',
      name: 'Neurology',
      description: 'Advanced brain and nervous system care',
      icon: 'psychology'
    },
    {
      id: 'static-3',
      name: 'Orthopedics',
      description: 'Bone and muscle care with modern surgical techniques',
      icon: 'fitness_center'
    },
    {
      id: 'static-4',
      name: 'Emergency Care',
      description: '24/7 emergency medical services',
      icon: 'local_hospital'
    },
    {
      id: 'static-5',
      name: 'Pediatrics',
      description: 'Specialized healthcare for children',
      icon: 'child_care'
    },
    {
      id: 'static-6',
      name: 'Dermatology',
      description: 'Skin care and cosmetic treatments',
      icon: 'spa'
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

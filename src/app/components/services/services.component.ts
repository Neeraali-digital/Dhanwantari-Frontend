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
      name: 'Trauma care',
      description: 'Rapid, life-saving care for severe injuries from accidents, violence, or disasters. Our dedicated Trauma Team provides immediate stabilization, surgery, and intensive care.',
      icon: 'personal_injury'
    },
    {
      id: 'static-3',
      name: 'Critical Care',
      description: 'Intensive care unit with advanced monitoring, life support systems, and specialized medical team for critically ill patients.',
      icon: 'monitor_heart'
    },
    {
      id: 'static-4',
      name: 'Orthopedics',
      description: 'Expert care for your musculoskeletal system, including bones, joints, ligaments, and tendons. We restore mobility with surgery, rehabilitation, and non-surgical treatment.',
      icon: 'healing'
    },
    {
      id: 'static-5',
      name: 'Paediatrics',
      description: 'Comprehensive medical care for infants, children, and adolescents, focusing on growth, development, and preventive health. We manage acute and chronic conditions.',
      icon: 'child_care'
    },
     {
      id: 'static-6',
      name: 'Geriatrics',
      description: 'Specialized healthcare for elderly patients focusing on age-related conditions, mobility, cognitive health, and quality of life.',
      icon: 'elderly_woman'
    },
     {
      id: 'static-7',
      name: 'Urology',
      description: 'Specialized care for the urinary tract in all ages, and the male reproductive system. We treat kidney stones, cancer, and incontinence issues',
      icon: 'science'
    },
    {
      id: 'static-8',
      name: 'Physiotherapy',
      description: 'Rehabilitation services for injury recovery, pain management, mobility improvement, and sports injury treatment.',
      icon: 'accessible'
    },
    {
      id: 'static-9',
      name: 'Ultrasound Scanning',
      description: 'Advanced ultrasound imaging services for diagnostic purposes with latest technology and experienced technicians.',
      icon: 'scanner'
    },
    {
      id: 'static-10',
      name: 'X-ray',
      description: 'Digital X-ray services for bone fractures, chest imaging, and other diagnostic needs with quick results.',
      icon: 'fullscreen'
    },
    {
      id: 'static-11',
      name: 'Laboratory',
      description: 'Complete laboratory testing services including blood tests, urine analysis, and other diagnostic tests with accurate results.',
      icon: 'biotech'
    },
     {
      id: 'static-12',
      name: 'Obstetrics and Gynecology',
      description: 'Comprehensive womens health services including prenatal care, delivery, gynecological treatments, and reproductive health.',
      icon: 'pregnant_woman'
    },
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

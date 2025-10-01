import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ManageServicesComponent implements OnInit {
services = [
  ];

  dynamicServices: any[] = [];
  editingService: any = null;
  serviceForm = {
    name: '',
    description: '',
    category: ''
  };
  loading = false;
  error = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDynamicServices();
  }

  loadDynamicServices() {
    this.loading = true;
    this.http.get<any[]>('https://api.neeraali.com/api/services/').subscribe({
      next: (data) => {
        this.dynamicServices = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load dynamic services';
        this.loading = false;
        console.error('Failed to load dynamic services', error);
      }
    });
  }

  get allServices() {
    return [...this.services, ...this.dynamicServices];
  }

  editService(service: any) {
    this.editingService = service;
    this.serviceForm = {
      name: service.name,
      description: service.description,
      category: service.category || ''
    };
  }

  saveService() {
    if (!this.serviceForm.name.trim()) {
      this.error = 'Service name is required';
      return;
    }
    this.error = '';
    if (this.editingService) {
      // Update existing service
      this.http.put(`https://api.neeraali.com/api/services/${this.editingService.id}/`, this.serviceForm).subscribe({
        next: () => {
          this.loadDynamicServices();
          this.cancelEdit();
        },
        error: (error) => {
          this.error = 'Failed to update service';
          console.error('Failed to update service', error);
        }
      });
    } else {
      // Create new service
      this.http.post('https://api.neeraali.com/api/services/', this.serviceForm).subscribe({
        next: () => {
          this.loadDynamicServices();
          this.cancelEdit();
        },
        error: (error) => {
          this.error = 'Failed to create service';
          console.error('Failed to create service', error);
        }
      });
    }
  }

  cancelEdit() {
    this.editingService = null;
    this.serviceForm = {
      name: '',
      description: '',
      category: ''
    };
    this.error = '';
  }

  deleteService(id: number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.http.delete(`https://api.neeraali.com/api/services/${id}/`).subscribe({
        next: () => {
          this.loadDynamicServices();
        },
        error: (error) => {
          this.error = 'Failed to delete service';
          console.error('Failed to delete service', error);
        }
      });
    }
  }
}

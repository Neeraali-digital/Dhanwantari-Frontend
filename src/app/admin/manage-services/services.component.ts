import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../core/services/service.service';

@Component({
  selector: 'app-manage-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ManageServicesComponent implements OnInit {
  services: any[] = [];
  loading = false;
  error = '';
  serviceForm = { name: '', description: '', category: '' };
  editingService: any = null;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.loading = true;
    this.serviceService.getServices().subscribe({
      next: (services) => {
        this.services = services;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load services';
        this.loading = false;
      }
    });
  }

  saveService() {
    if (!this.serviceForm.name) return;

    if (this.editingService) {
      this.serviceService.updateService(this.editingService.id, this.serviceForm).subscribe({
        next: (updatedService) => {
          const index = this.services.findIndex(s => s.id === this.editingService.id);
          if (index !== -1) {
            this.services[index] = updatedService;
          }
          this.resetForm();
        },
        error: () => {
          this.error = 'Failed to update service';
        }
      });
    } else {
      this.serviceService.createService(this.serviceForm).subscribe({
        next: (newService) => {
          this.services.unshift(newService);
          this.resetForm();
        },
        error: () => {
          this.error = 'Failed to add service';
        }
      });
    }
  }

  editService(service: any) {
    this.editingService = service;
    this.serviceForm = { ...service };
  }

  cancelEdit() {
    this.resetForm();
  }

  resetForm() {
    this.serviceForm = { name: '', description: '', category: '' };
    this.editingService = null;
    this.error = '';
  }

  deleteService(id: number) {
    if (confirm('Are you sure you want to delete this service?')) {
      this.serviceService.deleteService(id).subscribe({
        next: () => {
          this.services = this.services.filter(s => s.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete service';
        }
      });
    }
  }
}

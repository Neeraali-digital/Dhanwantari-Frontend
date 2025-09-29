import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../core/services/appointment.service';
import { BlogService } from '../../core/services/blog.service';
import { ContactService } from '../../core/services/contact.service';
import { GalleryService } from '../../core/services/gallery.service';
import { ServiceService } from '../../core/services/service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats = {
    appointments: 0,
    blogPosts: 0,
    contacts: 0,
    galleryImages: 0,
    services: 0
  };

  recentAppointments: any[] = [];
  loading = false;

  constructor(
    private appointmentService: AppointmentService,
    private blogService: BlogService,
    private contactService: ContactService,
    private galleryService: GalleryService,
    private serviceService: ServiceService
  ) {}

  ngOnInit() {
    this.loadStats();
    this.loadRecentAppointments();
  }

  loadStats() {
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) => this.stats.appointments = appointments.length,
      error: () => this.stats.appointments = 0
    });

    this.blogService.getBlogPosts().subscribe({
      next: (posts: any[]) => this.stats.blogPosts = posts.length,
      error: () => this.stats.blogPosts = 0
    });

    this.contactService.getContacts().subscribe({
      next: (messages: any[]) => this.stats.contacts = messages.length,
      error: () => this.stats.contacts = 0
    });

    this.galleryService.getGalleryImages().subscribe({
      next: (images) => this.stats.galleryImages = images.length,
      error: () => this.stats.galleryImages = 0
    });

    this.serviceService.getServices().subscribe({
      next: (services) => this.stats.services = services.length,
      error: () => this.stats.services = 0
    });
  }

  loadRecentAppointments() {
    this.loading = true;
    this.appointmentService.getAppointments().subscribe({
      next: (appointments) => {
        this.recentAppointments = appointments.slice(-5).reverse();
        this.loading = false;
      },
      error: () => {
        this.recentAppointments = [];
        this.loading = false;
      }
    });
  }
}

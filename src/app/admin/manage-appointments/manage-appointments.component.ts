import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 import { AppointmentService } from 'src/app/core/services/appointment.service';
import { ManageAppointmentsFormComponent } from './manage-appointments-form.component';

@Component({
  selector: 'app-manage-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule, ManageAppointmentsFormComponent],
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})
export class ManageAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  filteredAppointments: any[] = [];
  loading = false;
  showForm = false;
  editingAppointment: any = null;
  searchTerm = '';
  statusFilter = '';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.loading = true;
    this.appointmentService.getAppointments().subscribe({
      next: (data:any) => {
        this.appointments = data;
        this.filterAppointments();
        this.loading = false;
      },
      error: (err:any) => {
        console.error('Error loading appointments', err);
        this.loading = false;
      }
    });
  }

  filterAppointments() {
    this.filteredAppointments = this.appointments.filter(appointment => {
      const matchesSearch = !this.searchTerm ||
        appointment.patient_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.doctor_name.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus = !this.statusFilter ||
        appointment.status.toLowerCase() === this.statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }

  clearFilters() {
    this.searchTerm = '';
    this.statusFilter = '';
    this.filterAppointments();
  }

  addAppointment() {
    this.editingAppointment = null;
    this.showForm = true;
  }

  editAppointment(appointment: any) {
    this.editingAppointment = appointment;
    this.showForm = true;
  }

  saveAppointment(appointmentData: any) {
    if (this.editingAppointment) {
      this.appointmentService.updateAppointment(this.editingAppointment.id, appointmentData).subscribe({
        next: () => {
          this.loadAppointments();
          this.closeForm();
        },
        error: (err:any) => {
          console.error('Error updating appointment', err);
        }
      });
    } else {
      this.appointmentService.createAppointment(appointmentData).subscribe({
        next: () => {
          this.loadAppointments();
          this.closeForm();
        },
        error: (err:any) => {
          console.error('Error creating appointment', err);
        }
      });
    }
  }

  deleteAppointment(id: number) {
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id).subscribe({
        next: () => {
          this.loadAppointments();
        },
        error: (err:any) => {
          console.error('Error deleting appointment', err);
        }
      });
    }
  }

  closeForm() {
    this.showForm = false;
    this.editingAppointment = null;
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../core/services/appointment.service';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section style="padding: 80px 20px; background: #F5F5F5;">
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="font-size: 60px; color: #008080; margin-bottom: 20px;">🧠</div>
            <h2 style="font-size: 32px; color: #003366; margin-bottom: 15px;">AI Symptom Checker</h2>
            <p style="color: #666; font-size: 16px;">Get preliminary information about your symptoms</p>
          </div>

          <div>
            <textarea
              [(ngModel)]="symptoms"
              placeholder="Describe your symptoms here..."
              style="width: 100%; padding: 15px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; min-height: 120px; box-sizing: border-box; resize: vertical;">
            </textarea>
            <button
              (click)="checkSymptoms()"
              style="width: 100%; margin-top: 20px; background: #008080; color: white; padding: 15px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
              Analyze Symptoms
            </button>

            <div *ngIf="symptomResult()" style="margin-top: 30px; padding: 20px; background: #FFF3CD; border: 1px solid #FFEAA7; border-radius: 8px;">
              <p style="font-weight: bold; color: #856404; margin-bottom: 10px;">⚠️ Disclaimer:</p>
              <p style="color: #856404; font-size: 14px; margin-bottom: 15px;">
                This is for informational purposes only and not a substitute for professional medical advice.
              </p>
              <p style="color: #333;">{{ symptomResult() }}</p>
            </div>
          </div>
        </div>

        <div style="background: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 40px;">
          <h3 style="font-size: 24px; color: #003366; margin-bottom: 30px; text-align: center;">Book an Appointment</h3>
          <form (ngSubmit)="bookAppointment()">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Name</label>
                <input type="text" [(ngModel)]="appointment.name" name="name" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Phone</label>
                <input type="tel" [(ngModel)]="appointment.phone" name="phone" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Department</label>
                <select [(ngModel)]="appointment.department" name="department" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
                  <option value="">Select Department</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                </select>
              </div>
              <div>
                <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #003366;">Date</label>
                <input type="date" [(ngModel)]="appointment.date" name="date" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
              </div>
            </div>
            <button type="submit" [disabled]="loading" style="width: 100%; margin-top: 30px; background: #FFD700; color: #003366; padding: 15px; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer;">
              {{ loading ? 'Booking...' : 'Book Appointment' }}
            </button>
          </form>
          <div *ngIf="bookingMessage" style="margin-top: 20px; padding: 10px; background: #d4edda; color: #155724; border-radius: 4px;">
            {{ bookingMessage }}
          </div>
        </div>
      </div>
    </section>
  `
})
export class AppointmentsComponent {
  symptoms = signal('');
  symptomResult = signal('');
  appointment = { name: '', phone: '', department: '', date: '' };
  loading = false;
  bookingMessage = '';

  constructor(private appointmentService: AppointmentService) {}

  checkSymptoms() {
    const symptomText = this.symptoms().toLowerCase();
    let result = '';

    if (symptomText.includes('fever')) {
      result = 'Based on your symptoms, you may have a fever. Consider consulting our Internal Medicine department.';
    } else if (symptomText.includes('chest pain')) {
      result = 'Chest pain should be evaluated immediately. Please visit our Emergency department.';
    } else if (symptomText.includes('headache')) {
      result = 'Headaches can have various causes. Consult with our Internal Medicine department.';
    } else {
      result = 'Thank you for using our symptom checker. Please schedule an appointment for proper diagnosis.';
    }

    this.symptomResult.set(result);
  }

  bookAppointment() {
    if (!this.appointment.name || !this.appointment.phone || !this.appointment.department || !this.appointment.date) {
      this.bookingMessage = 'Please fill all fields.';
      return;
    }

    this.loading = true;
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: () => {
        this.bookingMessage = 'Appointment booked successfully!';
        this.appointment = { name: '', phone: '', department: '', date: '' };
        this.loading = false;
      },
      error: () => {
        this.bookingMessage = 'Failed to book appointment. Please try again.';
        this.loading = false;
      }
    });
  }
}

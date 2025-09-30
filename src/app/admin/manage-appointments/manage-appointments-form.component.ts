import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-appointments-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-appointments-form.component.html',
  styleUrls: ['./manage-appointments-form.component.css']
})
export class ManageAppointmentsFormComponent implements OnChanges {
  @Input() appointment: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      patient_name: ['', Validators.required],
      doctor_name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', Validators.required],
      status: ['pending', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appointment'] && this.appointment) {
      this.appointmentForm.patchValue(this.appointment);
    } else if (changes['appointment'] && !this.appointment) {
      this.appointmentForm.reset({ status: 'pending' });
    }
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.save.emit(this.appointmentForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}

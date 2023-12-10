import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {
  selectedDate: Date = new Date();

  constructor(
    private dialogRef: MatDialogRef<AddAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService
  ) {}

  addAppointment() {
    const appointmentData = {
      clientId: this.data.clientId,
      date: this.selectedDate
    };

    this.appointmentService.addAppointment(appointmentData);
    this.dialogRef.close(appointmentData); // Pass the new appointment back to the caller
  }
}

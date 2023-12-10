import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  selectedDate: Date;

  constructor(
    private dialogRef: MatDialogRef<EditAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit() {
    const appointmentDetails = this.appointmentService.getAppointmentDate(this.data.clientId, this.data.appointmentId);
    this.selectedDate = appointmentDetails;
  }

  updateAppointment() {
    this.appointmentService.updateAppointment(this.data.appointmentId, this.selectedDate);
    this.dialogRef.close(this.selectedDate);
  }
}

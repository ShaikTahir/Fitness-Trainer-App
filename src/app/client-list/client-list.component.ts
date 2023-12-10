import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component'; // Import your AddAppointmentComponent
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AppointmentService } from '../appointment.service';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { EditAppointmentComponent } from '../edit-appointment/edit-appointment.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService,private appointmentService:AppointmentService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clients = this.clientService.getClients();
  }

  addAppointment(clientId: string) {
    const dialogRef = this.dialog.open(AddAppointmentComponent, {
      width: '400px',
      data: { clientId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle result (new appointment) here
      }
    });
  }

  editClient(clientId: string) {
    // Logic for editing client details
    const dialogRef = this.dialog.open(EditClientComponent, {
      width: '400px',
      data: { clientId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle result (edited client) here
      }
    });
  }
  deleteClient(clientId: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this client?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle deletion of client here
      }
    });
  }
  editAppointment(clientId: string, appointmentId: any) {
    const dialogRef = this.dialog.open(EditAppointmentComponent, {
      width: '400px',
      data: { clientId, appointmentId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the updated appointment (result) as needed
      }
    });
  }
  deleteAppointment(clientId: string, appointmentId: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this appointment?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appointmentService.deleteAppointment(appointmentId);
        // Handle success or failure
      }
    });
  }

}

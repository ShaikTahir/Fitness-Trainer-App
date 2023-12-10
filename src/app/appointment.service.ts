import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointments: any[] =     [
  { id: 'a1', clientId: '1', date: new Date('2023-01-15T08:00') },
  { id: 'a2', clientId: '1', date: new Date('2023-01-20T10:30') },
  { id: 'a3', clientId: '2', date: new Date('2023-02-05T09:00') }
];
  constructor() {}

  getClientName(clientId){

  }

  getAllAppointments(): any[] {
    return this.appointments;
  }

  getAppointmentsForClient(clientId: string): any[] {
    return this.appointments.filter(appointment => appointment.clientId === clientId);
  }

  getAppointmentDate(clientId: string, appointmentId: string): Date | null {
    const appointment = this.appointments.find(app => app.clientId === clientId && app.id === appointmentId);
    return appointment ? new Date(appointment.date) : null;
  }

  addAppointment(appointmentData: any): void {
    // Generate unique ID for the appointment
    const newAppointment = { id: this.generateUUID(), ...appointmentData };
    this.appointments.push(newAppointment);
    // Other logic to update appointment data (e.g., API call, storage)
  }

  updateAppointment(appointmentId: string, updatedDate: Date): void {
    const appointmentIndex = this.appointments.findIndex(app => app.id === appointmentId);
    if (appointmentIndex !== -1) {
      this.appointments[appointmentIndex].date = updatedDate;
      // Other logic to update appointment data (e.g., API call, storage)
    }
  }

  deleteAppointment(appointmentId: string): void {
    this.appointments = this.appointments.filter(app => app.id !== appointmentId);
    // Other logic to delete appointment data (e.g., API call, storage)
  }

  generateUUID(): string {
    // Implement a function to generate a unique ID (e.g., UUID)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}

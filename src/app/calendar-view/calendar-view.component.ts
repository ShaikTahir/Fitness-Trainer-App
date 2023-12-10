import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date |any = new Date();
  events: CalendarEvent[] = [];

  constructor(private appointmentService: AppointmentService) {}
  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    const appointments = this.appointmentService.getAllAppointments(); // Retrieve appointments from service

    this.events = appointments.map(appointment => {
      return {
        start: appointment.date,
        title: `${appointment.clientId}'s Appointment`,
        color: {
          primary: '#1e90ff',
          secondary: '#D1E8FF'
        },
        // Other properties as needed
      };
    });
  }


  dayClicked(date: Date | any): void {
    console.log('Day clicked', date);
    // You can add logic here for handling day click events
  }

  eventClicked(event: CalendarEvent | any): void {
    console.log('Event clicked', event);
    // You can add logic here for handling event click events
  }
}

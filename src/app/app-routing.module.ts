// app-routing.module.ts
// Basic routing setup

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-appointment', component: AddAppointmentComponent },
  { path: 'calendar-view', component: CalendarViewComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

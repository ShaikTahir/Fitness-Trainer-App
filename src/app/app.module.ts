import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; // Import modules as needed
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule for animations
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'; // Import your ConfirmationDialogComponent
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ClientService } from './client.service';
import { AppointmentService } from './appointment.service';
import { MatNativeDateModule } from '@angular/material/core';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    AddAppointmentComponent,
    ConfirmationDialogComponent,
    CalendarViewComponent,
    EditClientComponent,
    EditAppointmentComponent
    // Add all your components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,MatInputModule,MatButtonModule,MatDatepickerModule,
    AppRoutingModule,MatIconModule,MatNativeDateModule,MatToolbarModule,MatSidenavModule,
    MatGridListModule,MatCardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    ClientService,
    AppointmentService
    // Add all your services here
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line to include CUSTOM_ELEMENTS_SCHEMA
})
export class AppModule { }

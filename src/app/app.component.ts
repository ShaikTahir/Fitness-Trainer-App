import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness-trainer-appointments';
  show:boolean =false;
  openCalendar()
  {
    this.show =!this.show;
  }
}

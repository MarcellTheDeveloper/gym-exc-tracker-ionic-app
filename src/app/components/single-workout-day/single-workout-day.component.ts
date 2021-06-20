import { GymDayHandlerService } from './../../services/gym-day-handler.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-workout-day',
  templateUrl: './single-workout-day.component.html',
  styleUrls: ['./single-workout-day.component.scss'],
})
export class SingleWorkoutDayComponent implements OnInit {
  @Input() day: string;
  excercises: [];
  constructor(private dayHandler: GymDayHandlerService) {}

  ngOnInit() {
    this.excercises = this.dayHandler.getExcOfDay(this.day.toLowerCase());
  }

  addExc() {}
}

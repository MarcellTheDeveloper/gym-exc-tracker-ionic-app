import { GymDayHandlerService } from './../../services/gym-day-handler.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-workout-day',
  templateUrl: './single-workout-day.component.html',
  styleUrls: ['./single-workout-day.component.scss'],
})
export class SingleWorkoutDayComponent implements OnInit
{
  @Input() day: string;
  exercises: [];
  constructor(private dayHandler: GymDayHandlerService, private router: Router) { }

  ngOnInit()
  {
    this.exercises = this.dayHandler.getExcOfDay(this.day.toLowerCase());

  }

  async addExc()
  {
    await this.router.navigate(['single-workout-exercise-add']);
    this.dayHandler.activeCurrentDay.next(this.day);
  }

}

import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';

@Component({
  selector: 'app-single-workout-exercise-add',
  templateUrl: './single-workout-exercise-add.page.html',
  styleUrls: ['./single-workout-exercise-add.page.scss'],
})
export class SingleWorkoutExerciseAddPage implements OnInit, OnDestroy
{
  activeCurrentDaySub;
  currentDay: string;
  formValues: ExcerciseItem = {
    name: '',
    bodyPart: '',
    sets: 0,
    reps: 0,
    weight: 0
  };
  constructor(private dayHandler: GymDayHandlerService, private router: Router) { }


  ngOnInit()
  {
    this.activeCurrentDaySub = this.dayHandler.activeCurrentDay.subscribe(day => this.currentDay = day);
  }

  goBackToHomePage()
  {
    this.router.navigate(['home']);
  }

  ngOnDestroy()
  {
    this.activeCurrentDaySub.unsubscribe();
  }

}

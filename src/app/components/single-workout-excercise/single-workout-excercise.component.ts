import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, Input, OnInit } from '@angular/core';
import { GymDayHandlerService } from './../../services/gym-day-handler.service';

@Component({
  selector: 'app-single-workout-excercise',
  templateUrl: './single-workout-excercise.component.html',
  styleUrls: ['./single-workout-excercise.component.scss'],
})
export class SingleWorkoutExcerciseComponent implements OnInit
{
  @Input() exercise: ExcerciseItem;
  constructor(private dayHandler: GymDayHandlerService) { }

  ngOnInit()
  {
    console.log(this.exercise);
  }

}

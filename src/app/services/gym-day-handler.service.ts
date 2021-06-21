import { ExcerciseItem } from './../interfaces/excercise-item';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymDayHandlerService
{
  subject = new Subject<any>();
  activeCurrentDay = new Subject<string>();

  exercisesByDay = {
    sunday: [
      { name: 'Biceps curl', bodyPart: 'Biceps', sets: 4, reps: 8, weight: 20 },
      {
        name: 'Biceps hammer',
        bodyPart: 'Biceps',
        sets: 3,
        reps: 12,
        weight: 20
      },
    ],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [
      { name: 'Biceps curl', bodyPart: 'Biceps', sets: 4, reps: 8, weight: 20 },
      {
        name: 'Biceps hammer curl curl curl',
        bodyPart: 'Biceps',
        sets: 3,
        reps: 12,
        weight: 20
      },
    ],
  };

  constructor() { }

  getExcOfDay(currentDay: string)
  {
    return this.exercisesByDay[currentDay];
  }
}

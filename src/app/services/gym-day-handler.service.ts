import { ExcerciseItem } from './../interfaces/excercise-item';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymDayHandlerService {
  subject = new Subject<any>();

  excercisesByDay = {
    sunday: [
      { name: 'Biceps curl', bodyPart: 'Biceps', series: 4, excInOneSeries: 8 },
      {
        name: 'Biceps hammer',
        bodyPart: 'Biceps',
        series: 3,
        excInOneSeries: 12,
      },
    ],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [
      { name: 'Biceps curl', bodyPart: 'Biceps', series: 4, excInOneSeries: 8 },
      {
        name: 'Biceps hammer',
        bodyPart: 'Biceps',
        series: 3,
        excInOneSeries: 12,
      },
    ],
  };

  constructor() {}

  getExcOfDay(currentDay: string) {
    return this.excercisesByDay[currentDay];
  }
}

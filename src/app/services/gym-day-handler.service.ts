import { ExcerciseItem } from './../interfaces/excercise-item';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymDayHandlerService {
  subject = new Subject<any>();
  emitNewExcDayList = new Subject<any>();
  activeCurrentDay = new Subject<string>();

  exercisesByDay = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [
      {
        name: 'Biceps curl',
        bodyPart: 'Biceps',
        sets: 4,
        reps: 8,
        weight: 20,
        img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg',
      },
      {
        name: 'Biceps hammer curl curl curl',
        bodyPart: 'Biceps',
        sets: 3,
        reps: 12,
        weight: 20,
        img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg',
      },
    ],
    sunday: [
      {
        name: 'Biceps curl',
        bodyPart: 'Biceps',
        sets: 4,
        reps: 8,
        weight: 20,
        img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg',
      },
      {
        name: 'Biceps hammer',
        bodyPart: 'Biceps',
        sets: 3,
        reps: 12,
        weight: 20,
        img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg',
      },
    ],
  };

  constructor() {}

  getExercisesByDay() {
    return this.exercisesByDay;
  }

  addExercise(day: string, exc: ExcerciseItem) {
    this.exercisesByDay[day].push(exc);
  }

  editExercise(day: string, oldExerciseName, newExercise) {
    // console.log(newExercise);
    // console.log(this.exercisesByDay[day]);

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.exercisesByDay[day].length; i++) {
      if (this.exercisesByDay[day][i].name === oldExerciseName) {
        this.exercisesByDay[day][i] = newExercise;
      }
    }
  }

  deleteExercise(day: string, name: string) {
    this.exercisesByDay[day] = this.exercisesByDay[day].filter(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      (exercise: any) => exercise['name'] !== name
    );
    // return this.emitNewExcDayList.next(this.exercisesByDay);
  }
}

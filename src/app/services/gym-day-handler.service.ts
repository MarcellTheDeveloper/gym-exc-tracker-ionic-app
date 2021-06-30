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
        img: 'https://i.pinimg.com/originals/95/42/dd/9542dde5baffc4e28a1cdd4ee95a1149.png',
      },
    ],
    sunday: [
      {
        name: 'Biceps curl',
        bodyPart: 'Biceps',
        sets: 4,
        reps: 8,
        weight: 20,
        // eslint-disable-next-line max-len
        img: 'https://www.hexagonmi.com/-/media/Images/Hexagon/Hexagon%20MI/Solutions/Case%20Studies/Other%20Cool%20Stuff/Watson%20Gym%20Equipment/watson_12702%20-%20Copy.ashx?hash=D3F42D94F3BDEF90CA63F06B08E86CA5&h=468&w=350&la=de-AT',
      },
      {
        name: 'Biceps hammer',
        bodyPart: 'Biceps',
        sets: 3,
        reps: 12,
        weight: 20,
        img: 'https://www.greatlifeindia.in/wp-content/uploads/2020/11/graetlife.jpg',
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

import { FireDbService } from './fire-db.service';
import { CapStorageService } from './cap-storage.service';
import { ExcerciseItem } from './../interfaces/excercise-item';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GymDayHandlerService
{
  subject = new Subject<any>();
  emitNewExcDayList = new Subject<any>();
  activeCurrentDay = new Subject<string>();

  exercisesByDay = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  constructor(
    private db: AngularFirestore,
    public capStorage: CapStorageService,
    private fireDbService: FireDbService
  ) { }

  updateExercisesByDayFromDb(udpatedExc)
  {
    console.log('gymday', udpatedExc);
    this.exercisesByDay = udpatedExc;
  }

  getExercisesByDay()
  {
    console.log('dsadasda', this.exercisesByDay);
    return this.exercisesByDay;
  }

  async addExercise(day: string, exc: ExcerciseItem)
  {
    await this.exercisesByDay[day].push(exc);
    const userId = await this.capStorage.getUserId();
    this.fireDbService.reSetExercises(this.exercisesByDay, userId);
  }

  async editExercise(day: string, oldExerciseId, newExercise)
  {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.exercisesByDay[day].length; i++)
    {
      if (this.exercisesByDay[day][i].id === oldExerciseId)
      {
        this.exercisesByDay[day][i] = newExercise;
      }
    }
    const userId = await this.capStorage.getUserId();
    this.fireDbService.reSetExercises(this.exercisesByDay, userId);
  }

  async deleteExercise(day: string, id: string)
  {
    this.exercisesByDay[day] = this.exercisesByDay[day].filter(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      (exercise: any) => exercise['id'] !== id
    );
    // return this.emitNewExcDayList.next(this.exercisesByDay);
    const userId = await this.capStorage.getUserId();
    this.fireDbService.reSetExercises(this.exercisesByDay, userId);
  }

  async reOrderExercises(day: string, exercises: any)
  {
    const getDay = day.toLowerCase();
    this.exercisesByDay[getDay] = exercises;
    const userId = await this.capStorage.getUserId();
    this.fireDbService.reSetExercises(this.exercisesByDay, userId);
  }
}

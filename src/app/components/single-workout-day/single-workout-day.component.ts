import { ModalController } from '@ionic/angular';
import { GymDayHandlerService } from './../../services/gym-day-handler.service';
import { Component, Input, OnInit, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SingleWorkoutExerciseAddPage } from 'src/app/pages/single-workout-exercise-add/single-workout-exercise-add.page';


@Component({
  selector: 'app-single-workout-day',
  templateUrl: './single-workout-day.component.html',
  styleUrls: ['./single-workout-day.component.scss'],
})
export class SingleWorkoutDayComponent implements OnInit, OnDestroy, OnChanges
{
  @Input() day: any;
  @Input() exercise: any;
  dailyBodyParts = [];
  constructor(
    private modalController: ModalController,
    public dayHandler: GymDayHandlerService
  ) { }

  async ngOnInit()
  {
    // this.exercises = this.dayHandler.getExercisesByDay(this.day.toLowerCase());
    this.day = this.day.charAt(0).toUpperCase() + this.day.slice(1);
  }
  ngOnChanges()
  {
    const bodyParts = [];
    for (const i of this.exercise)
    {
      bodyParts.push(i.bodyPart.toLowerCase());
    }
    this.dailyBodyParts = [...new Set(bodyParts)];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.dailyBodyParts.length; i++)
    {
      this.dailyBodyParts[i] = this.dailyBodyParts[i].charAt(0).toUpperCase() + this.dailyBodyParts[i].slice(1);
    }
    this.dailyBodyParts = this.dailyBodyParts.sort();
  }
  async addExc()
  {
    const modal = await this.modalController.create({
      component: SingleWorkoutExerciseAddPage,
      cssClass: 'my-custom-class',
      componentProps: {
        exercise: this.exercise,
        day: this.day,
      },
    });
    return await modal.present();
  }

  reorderList(e)
  {
    console.log(`Item moved ${e.detail.from} to ${e.detail.to}`);
    const movedItem = this.exercise.splice(e.detail.from, 1)[0];
    this.exercise.splice(e.detail.to, 0, movedItem);
    e.detail.complete();
    this.dayHandler.reOrderExercises(this.day, this.exercise);
  }

  updatedList()
  {
    console.table(this.exercise);
  };

  ngOnDestroy() { }
}

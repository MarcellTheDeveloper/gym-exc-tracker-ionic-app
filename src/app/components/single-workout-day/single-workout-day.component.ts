import { ModalController } from '@ionic/angular';
import { GymDayHandlerService } from './../../services/gym-day-handler.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SingleWorkoutExerciseAddPage } from 'src/app/pages/single-workout-exercise-add/single-workout-exercise-add.page';
@Component({
  selector: 'app-single-workout-day',
  templateUrl: './single-workout-day.component.html',
  styleUrls: ['./single-workout-day.component.scss'],
})
export class SingleWorkoutDayComponent implements OnInit, OnDestroy {
  @Input() day: any;
  @Input() exercise: any;
  constructor(
    private dayHandler: GymDayHandlerService,
    private router: Router,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    // this.exercises = this.dayHandler.getExercisesByDay(this.day.toLowerCase());
    this.day = this.day.charAt(0).toUpperCase() + this.day.slice(1);
  }

  async addExc() {
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

  ngOnDestroy() {}
}

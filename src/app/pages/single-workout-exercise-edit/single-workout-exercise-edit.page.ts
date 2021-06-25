import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-workout-exercise-edit',
  templateUrl: './single-workout-exercise-edit.page.html',
  styleUrls: ['./single-workout-exercise-edit.page.scss'],
})
export class SingleWorkoutExerciseEditPage implements OnInit {
  @Input() exercise: ExcerciseItem;
  @Input() day: string;
  oldExerciseValues: ExcerciseItem;
  constructor(
    private modalController: ModalController,
    private dayHandler: GymDayHandlerService,
    private alertController: AlertController
  ) {}
  ngOnInit() {
    this.exercise = { ...this.exercise };
    this.oldExerciseValues = { ...this.exercise };
  }

  async onSaveExercise() {
    this.dayHandler.editExercise(
      this.day.toLocaleLowerCase(),
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.oldExerciseValues['name'],
      this.exercise
    );

    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async dismissModal() {
    if (
      this.exercise.name !== this.oldExerciseValues.name ||
      this.exercise.bodyPart !== this.oldExerciseValues.bodyPart ||
      this.exercise.reps !== this.oldExerciseValues.reps ||
      this.exercise.sets !== this.oldExerciseValues.sets ||
      this.exercise.weight !== this.oldExerciseValues.weight
    ) {
      console.log(this.exercise, this.oldExerciseValues);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm',
        message: 'Are you sure you want to leave what you have started?',
        buttons: [
          {
            text: 'No i stay thanks',
            role: 'cancel',
            cssClass: 'noIDontBtn',
            handler: () => {},
          },
          {
            text: 'Yes i do',
            cssClass: 'yesIDoBtn',
            handler: () => {
              this.exercise = this.oldExerciseValues;
              this.modalController.dismiss({
                dismissed: true,
              });
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.modalController.dismiss({
        dismissed: true,
      });
    }
  }
}

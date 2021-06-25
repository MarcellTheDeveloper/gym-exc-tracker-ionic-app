import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, Input, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { SingleWorkoutExerciseEditPage } from '../single-workout-exercise-edit/single-workout-exercise-edit.page';
// import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
@Component({
  selector: 'app-single-workout-exercise-open',
  templateUrl: './single-workout-exercise-open.page.html',
  styleUrls: ['./single-workout-exercise-open.page.scss'],
})
export class SingleWorkoutExerciseOpenPage implements OnInit {
  @Input() exercise: ExcerciseItem;
  @Input() day: string;

  constructor(
    private dayHandler: GymDayHandlerService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {}
  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async onClickSettings() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Settings',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Edit exercise',
          icon: 'create-outline',
          cssClass: 'actionSheetEditBtn',
          handler: async () => {
            const modal = await this.modalController.create({
              component: SingleWorkoutExerciseEditPage,
              componentProps: {
                exercise: this.exercise,
                day: this.day,
              },
            });

            this.modalController.dismiss({
              dismissed: true,
            });
            return await modal.present();
          },
        },
        {
          text: 'Delete',
          cssClass: 'actionSheetDeleteBtn',
          icon: 'trash-outline',
          handler: async () => {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Confirm',
              message: `Are you sure you want to delete <span class="alertMessageExcName">${this.exercise.name}</span> exercise?`,
              buttons: [
                {
                  text: 'No i changed my mind',
                  role: 'cancel',
                  cssClass: 'noIDontBtn',
                  handler: () => {},
                },
                {
                  text: 'Yes i do!',
                  cssClass: 'yesIDoBtn',
                  handler: () => {
                    this.dayHandler.deleteExercise(
                      this.day.toLocaleLowerCase(),
                      this.exercise.name
                    );
                    this.modalController.dismiss({
                      dismissed: true,
                    });
                  },
                },
              ],
            });

            await alert.present();
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

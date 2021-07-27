import { SingleWorkoutExerciseOpenPage } from './../../pages/single-workout-exercise-open/single-workout-exercise-open.page';
import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GymDayHandlerService } from './../../services/gym-day-handler.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { SingleWorkoutExerciseEditPage } from 'src/app/pages/single-workout-exercise-edit/single-workout-exercise-edit.page';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-single-workout-excercise',
  templateUrl: './single-workout-excercise.component.html',
  styleUrls: ['./single-workout-excercise.component.scss'],
})
export class SingleWorkoutExcerciseComponent implements OnInit, OnChanges
{
  @Input() exercise: ExcerciseItem;
  @Input() day: string;
  loader = false;
  language;
  constructor(
    private dayHandler: GymDayHandlerService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public languageService: LanguageService
  ) { }

  ngOnInit()
  {
    this.language = this.languageService.returnLanguage().language;
  }
  ngOnChanges()
  {
    this.loader = true;
  }
  async openSingleWorkout()
  {
    const modal = await this.modalController.create({
      component: SingleWorkoutExerciseOpenPage,
      cssClass: 'my-custom-class',
      componentProps: {
        exercise: this.exercise,
        day: this.day,
      },
    });
    return await modal.present();
  }

  async onClickSettings()
  {
    const actionSheet = await this.actionSheetController.create({
      header: this.language.exerciseSettings.settings,
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.language.exerciseSettings.edit,
          icon: 'create-outline',
          cssClass: 'actionSheetEditBtn',
          handler: async () =>
          {
            const modal = await this.modalController.create({
              component: SingleWorkoutExerciseEditPage,
              componentProps: {
                exercise: await this.exercise,
                day: this.day,
              },
            });
            return await modal.present();
          },
        },
        {
          text: this.language.exerciseSettings.delete,
          icon: 'trash-outline',
          cssClass: 'actionSheetDeleteBtn',
          handler: async () =>
          {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: this.language.exerciseSettings.alert,
              message: `${this.language.exerciseSettings.deleteConfirm} <span class="alertMessageExcName">${this.exercise.name}</span>?`,
              buttons: [
                {
                  text: this.language.exerciseSettings.no,
                  role: 'cancel',
                  cssClass: 'noIDontBtn',
                  handler: () => { },
                },
                {
                  text: this.language.exerciseSettings.yes,
                  cssClass: 'yesIDoBtn',
                  handler: () =>
                  {
                    this.dayHandler.deleteExercise(
                      this.day.toLocaleLowerCase(),
                      this.exercise.id
                    );
                  },
                },
              ],
            });

            await alert.present();
          },
        },
        {
          text: this.language.exerciseSettings.cancel,
          icon: 'close-outline',
          role: 'cancel',
          handler: () =>
          {
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

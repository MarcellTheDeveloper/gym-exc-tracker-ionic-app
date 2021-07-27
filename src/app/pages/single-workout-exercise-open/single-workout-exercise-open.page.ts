import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, Input, OnInit } from '@angular/core';
import
{
  ActionSheetController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { SingleWorkoutExerciseEditPage } from '../single-workout-exercise-edit/single-workout-exercise-edit.page';
import { LanguageService } from 'src/app/services/language.service';
// import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
@Component({
  selector: 'app-single-workout-exercise-open',
  templateUrl: './single-workout-exercise-open.page.html',
  styleUrls: ['./single-workout-exercise-open.page.scss'],
})
export class SingleWorkoutExerciseOpenPage implements OnInit
{
  @Input() exercise: ExcerciseItem;
  @Input() day: string;
  language;
  constructor(
    private dayHandler: GymDayHandlerService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    public languageService: LanguageService
  ) { }
  ngOnInit()
  {
    this.language = this.languageService.returnLanguage().language;
  }

  dismissModal()
  {
    this.modalController.dismiss({
      dismissed: true,
    });
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
            this.modalController.dismiss({
              dismissed: true,
            });
            const modal = await this.modalController.create({
              component: SingleWorkoutExerciseEditPage,
              componentProps: {
                exercise: this.exercise,
                day: this.day,
              },
            });

            return await modal.present();
          },
        },
        {
          text: this.language.exerciseSettings.delete,
          cssClass: 'actionSheetDeleteBtn',
          icon: 'trash-outline',
          handler: async () =>
          {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: this.language.alertMessageLabels.alert,
              // eslint-disable-next-line max-len
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
  }
}

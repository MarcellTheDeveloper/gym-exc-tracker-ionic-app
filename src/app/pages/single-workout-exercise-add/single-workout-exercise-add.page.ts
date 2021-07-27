import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { v4 as uuidv4 } from 'uuid';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-single-workout-exercise-add',
  templateUrl: './single-workout-exercise-add.page.html',
  styleUrls: ['./single-workout-exercise-add.page.scss'],
})
export class SingleWorkoutExerciseAddPage implements OnInit, OnDestroy
{
  @Input() day: string;
  @Input() dayName: string;
  language;
  activeCurrentDaySub;
  loader = false;
  formValues: ExcerciseItem = {
    id: uuidv4(),
    day: '',
    name: '',
    bodyPart: '',
    sets: 0,
    reps: 0,
    weight: 0,
    img: '',
    desc: '',
    unit: 'kg'
  };
  constructor(
    private dayHandler: GymDayHandlerService,
    public alertController: AlertController,
    private modalController: ModalController,
    public sanitizer: DomSanitizer,
    public fireStorage: AngularFireStorage,
    private capStorage: CapStorageService,
    public languageService: LanguageService
  ) { }

  ngOnInit()
  {
    this.language = this.languageService.returnLanguage().language;
    this.activeCurrentDaySub = this.dayHandler.activeCurrentDay.subscribe(
      (day) => (this.day = day)
    );
    this.formValues.day = this.day.toLowerCase();
  }

  async goBackToHomePage()
  {
    if (
      this.formValues.name ||
      this.formValues.reps ||
      this.formValues.sets ||
      this.formValues.weight ||
      this.formValues.img ||
      this.formValues.desc ||
      this.formValues.bodyPart
    )
    {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.language.alertMessageLabels.alert,
        // eslint-disable-next-line @typescript-eslint/dot-notation
        message: this.language.alertMessageLabels.leaveConfirm,
        buttons: [
          {
            text: this.language.alertMessageLabels.iStay,
            role: 'cancel',
            cssClass: 'noIDontBtn',
            handler: () => { },
          },
          {
            text: this.language.alertMessageLabels.iLeave,
            cssClass: 'yesIDoBtn',
            handler: () =>
            {
              this.formValues = {
                id: '',
                name: '',
                bodyPart: '',
                sets: 0,
                reps: 0,
                weight: 0,
                // eslint-disable-next-line max-len
                img: '',
              };
              this.modalController.dismiss({
                dismissed: true,
              });
            },
          },
        ],
      });

      await alert.present();
    } else
    {
      this.formValues = {
        id: '',
        day: '',
        name: '',
        bodyPart: '',
        sets: 0,
        reps: 0,
        weight: 0,
        img: '',
        desc: '',
        unit: 'kg'
      };
      this.modalController.dismiss({
        dismissed: true,
      });
    }
  }

  valueChanger(name: string, change: boolean)
  {
    if (name === 'reps')
    {
      if (change)
      {
        this.formValues.reps++;
      }
      if (!change && this.formValues.reps > 0)
      {
        this.formValues.reps--;
      }
    }

    if (name === 'weight')
    {
      if (change)
      {
        this.formValues.weight++;
      }
      if (!change && this.formValues.weight > 0)
      {
        this.formValues.weight--;
      }
    }

    if (name === 'sets')
    {
      if (change)
      {
        this.formValues.sets++;
      }
      if (!change && this.formValues.sets > 0)
      {
        this.formValues.sets--;
      }
    }
  }

  async saveExercise()
  {
    if (
      this.formValues.name &&
      this.formValues.sets &&
      this.formValues.reps &&
      this.formValues.weight &&
      this.formValues.bodyPart
    )
    {
      this.dayHandler.addExercise(this.day.toLowerCase(), this.formValues);
      this.formValues = {
        id: this.formValues.id,
        name: '',
        day: '',
        bodyPart: '',
        sets: 0,
        reps: 0,
        weight: 0,
        img: '',
        desc: '',
        unit: 'kg'
      };
      this.modalController.dismiss({
        dismissed: true,
      });
    } else
    {
      const alert = await this.alertController.create({
        cssClass: 'yesIDoBtn',
        header: this.language.alertMessageLabels.error,
        // subHeader: 'Subtitle',
        message: this.language.alertMessageLabels.beforeSaveFillAllReq,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  takePicture = async () =>
  {
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: false,
      correctOrientation: true,
      resultType: CameraResultType.Base64,
    });
    this.loader = true;
    const userId = await this.capStorage.getUserId();
    this.fireStorage
      .ref(`/images/${userId}`)
      .child(uuidv4())
      .putString(image.base64String, 'base64')
      .then(async (snapshot) =>
      {
        this.formValues.img = await snapshot.ref.getDownloadURL();
        this.loader = false;
      });
  };
  ngOnDestroy()
  {
    this.activeCurrentDaySub.unsubscribe();
  }
}

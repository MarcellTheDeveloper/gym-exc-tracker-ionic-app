import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/storage';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-single-workout-exercise-edit',
  templateUrl: './single-workout-exercise-edit.page.html',
  styleUrls: ['./single-workout-exercise-edit.page.scss'],
})
export class SingleWorkoutExerciseEditPage implements OnInit
{
  @Input() exercise: ExcerciseItem;
  @Input() day: string;
  oldExerciseValues: ExcerciseItem;
  loader = false;
  constructor(
    private modalController: ModalController,
    private dayHandler: GymDayHandlerService,
    private alertController: AlertController,
    public fireStorage: AngularFireStorage,
    private capStorage: CapStorageService
  ) { }
  ngOnInit()
  {
    this.exercise = { ...this.exercise };
    this.oldExerciseValues = { ...this.exercise };
  }

  async onSaveExercise()
  {
    this.dayHandler.editExercise(
      this.day.toLocaleLowerCase(),
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.oldExerciseValues['id'],
      this.exercise
    );

    this.modalController.dismiss({
      dismissed: true,
    });
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
        this.exercise.img = await snapshot.ref.getDownloadURL();
        console.log(
          'Uploaded a base64 string!',
          await snapshot.ref.getDownloadURL()
        );
        this.loader = false;
      });
  };

  async dismissModal()
  {
    if (
      this.exercise.name !== this.oldExerciseValues.name ||
      this.exercise.bodyPart !== this.oldExerciseValues.bodyPart ||
      this.exercise.reps !== this.oldExerciseValues.reps ||
      this.exercise.sets !== this.oldExerciseValues.sets ||
      this.exercise.weight !== this.oldExerciseValues.weight
    )
    {
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
            handler: () => { },
          },
          {
            text: 'Yes i do',
            cssClass: 'yesIDoBtn',
            handler: () =>
            {
              this.exercise = this.oldExerciseValues;
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
      this.modalController.dismiss({
        dismissed: true,
      });
    }
  }
}

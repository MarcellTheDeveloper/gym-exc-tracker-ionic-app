import { ExcerciseItem } from './../../interfaces/excercise-item';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-single-workout-exercise-add',
  templateUrl: './single-workout-exercise-add.page.html',
  styleUrls: ['./single-workout-exercise-add.page.scss'],
})
export class SingleWorkoutExerciseAddPage implements OnInit, OnDestroy
{
  activeCurrentDaySub;
  currentDay: string;
  formValues: ExcerciseItem = {
    name: '',
    bodyPart: '',
    sets: 0,
    reps: 0,
    weight: 0,
    img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg'
  };
  constructor(private dayHandler: GymDayHandlerService, private router: Router, public alertController: AlertController) { }


  ngOnInit()
  {
    this.activeCurrentDaySub = this.dayHandler.activeCurrentDay.subscribe(day => this.currentDay = day);
  }

  goBackToHomePage()
  {
    this.formValues = {
      name: '',
      bodyPart: '',
      sets: 0,
      reps: 0,
      weight: 0,
      img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg'
    };
    this.router.navigate(['home']);
  }

  valueChanger(name: string, change: boolean)
  {
    if (name === 'reps')
    {
      if (change) { this.formValues.reps++; }
      if (!change && this.formValues.reps > 0) { this.formValues.reps--; }
    }

    if (name === 'weight')
    {
      if (change) { this.formValues.weight++; }
      if (!change && this.formValues.weight > 0) { this.formValues.weight--; }
    }

    if (name === 'sets')
    {
      if (change) { this.formValues.sets++; }
      if (!change && this.formValues.sets > 0) { this.formValues.sets--; }
    }
  }

  async saveExercise()
  {
    if (this.formValues.name && this.formValues.sets && this.formValues.reps && this.formValues.weight)
    {
      this.dayHandler.addExercise(this.currentDay.toLowerCase(), this.formValues);
      this.formValues = {
        name: '',
        bodyPart: '',
        sets: 0,
        reps: 0,
        weight: 0,
        img: 'https://image.made-in-china.com/2f0j00jNStbZyclpkT/Sport-Seated-Bicep-Curl-Machine-Sports-Machine-Exercise-for-Biceps.jpg'
      };
      this.router.navigate(['home']);
    } else
    {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        // subHeader: 'Subtitle',
        message: 'Before saving please fill all the required fields!',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  ngOnDestroy()
  {
    this.activeCurrentDaySub.unsubscribe();
  }

}

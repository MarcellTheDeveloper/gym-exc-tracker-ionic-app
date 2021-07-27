import { HighlightDangerDirective } from './../../directives/highlight-danger.directive';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleWorkoutDayComponent } from 'src/app/components/single-workout-day/single-workout-day.component';
import { IonicModule } from '@ionic/angular';
import { SingleWorkoutExcerciseComponent } from 'src/app/components/single-workout-excercise/single-workout-excercise.component';
import { FormsModule } from '@angular/forms';
import { Storage } from '@capacitor/storage';

@NgModule({
  declarations: [
    SingleWorkoutDayComponent,
    HeaderComponent,
    SingleWorkoutExcerciseComponent,
    HighlightDangerDirective
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    SingleWorkoutDayComponent,
    HeaderComponent,
    SingleWorkoutExcerciseComponent,
    FormsModule,
    HighlightDangerDirective
  ],
})
export class SharedModule { }

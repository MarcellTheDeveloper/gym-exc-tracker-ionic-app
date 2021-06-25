import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleWorkoutDayComponent } from 'src/app/components/single-workout-day/single-workout-day.component';
import { IonicModule } from '@ionic/angular';
import { SingleWorkoutExcerciseComponent } from 'src/app/components/single-workout-excercise/single-workout-excercise.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SingleWorkoutDayComponent,
    HeaderComponent,
    SingleWorkoutExcerciseComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    SingleWorkoutDayComponent,
    HeaderComponent,
    SingleWorkoutExcerciseComponent,
    FormsModule,
  ],
})
export class SharedModule {}

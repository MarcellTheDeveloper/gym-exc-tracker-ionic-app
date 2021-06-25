import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseOpenPageRoutingModule } from './single-workout-exercise-open-routing.module';

import { SingleWorkoutExerciseOpenPage } from './single-workout-exercise-open.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleWorkoutExerciseOpenPageRoutingModule
  ],
  declarations: [SingleWorkoutExerciseOpenPage]
})
export class SingleWorkoutExerciseOpenPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseAddPageRoutingModule } from './single-workout-exercise-add-routing.module';

import { SingleWorkoutExerciseAddPage } from './single-workout-exercise-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleWorkoutExerciseAddPageRoutingModule
  ],
  declarations: [SingleWorkoutExerciseAddPage]
})
export class SingleWorkoutExerciseAddPageModule {}

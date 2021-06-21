import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseEditPageRoutingModule } from './single-workout-exercise-edit-routing.module';

import { SingleWorkoutExerciseEditPage } from './single-workout-exercise-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleWorkoutExerciseEditPageRoutingModule
  ],
  declarations: [SingleWorkoutExerciseEditPage]
})
export class SingleWorkoutExerciseEditPageModule {}

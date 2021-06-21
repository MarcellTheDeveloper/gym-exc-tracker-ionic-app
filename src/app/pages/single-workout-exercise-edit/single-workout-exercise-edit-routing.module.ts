import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleWorkoutExerciseEditPage } from './single-workout-exercise-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SingleWorkoutExerciseEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleWorkoutExerciseEditPageRoutingModule {}

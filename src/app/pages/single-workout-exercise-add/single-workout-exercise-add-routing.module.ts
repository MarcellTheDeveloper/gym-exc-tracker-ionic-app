import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleWorkoutExerciseAddPage } from './single-workout-exercise-add.page';

const routes: Routes = [
  {
    path: '',
    component: SingleWorkoutExerciseAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleWorkoutExerciseAddPageRoutingModule {}

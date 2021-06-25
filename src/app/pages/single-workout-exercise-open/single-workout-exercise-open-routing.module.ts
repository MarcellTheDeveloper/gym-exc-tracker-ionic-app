import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleWorkoutExerciseOpenPage } from './single-workout-exercise-open.page';

const routes: Routes = [
  {
    path: '',
    component: SingleWorkoutExerciseOpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleWorkoutExerciseOpenPageRoutingModule {}

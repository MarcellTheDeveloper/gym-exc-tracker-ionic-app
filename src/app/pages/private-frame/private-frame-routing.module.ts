import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateFramePage } from './private-frame.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateFramePage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'favourite-gyms',
        loadChildren: () =>
          import('../favourite-gyms/favourite-gyms.module').then(
            (m) => m.FavouriteGymsPageModule
          ),
      },
      {
        path: 'single-workout-exercise-edit',
        loadChildren: () =>
          import(
            '../single-workout-exercise-edit/single-workout-exercise-edit.module'
          ).then((m) => m.SingleWorkoutExerciseEditPageModule),
      },
      {
        path: 'single-workout-exercise-add',
        loadChildren: () =>
          import(
            '../single-workout-exercise-add/single-workout-exercise-add.module'
          ).then((m) => m.SingleWorkoutExerciseAddPageModule),
      },
      {
        path: 'single-workout-exercise-open',
        loadChildren: () =>
          import(
            '../single-workout-exercise-open/single-workout-exercise-open.module'
          ).then((m) => m.SingleWorkoutExerciseOpenPageModule),
      },
      {
        path: 'me',
        loadChildren: () =>
          import('../me/me.module').then((m) => m.MePageModule),
      },
      {
        path: 'diary',
        loadChildren: () =>
          import('../diary/diary.module').then((m) => m.DiaryPageModule),
      },
      {
        path: 'test-page',
        loadChildren: () => import('./test-page/test-page.module').then(m => m.TestPagePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateFramePageRoutingModule { }

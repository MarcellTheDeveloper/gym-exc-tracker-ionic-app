/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'favourite-gyms',
    loadChildren: () =>
      import('./pages/favourite-gyms/favourite-gyms.module').then(
        (m) => m.FavouriteGymsPageModule
      ),
  },
  {
    path: 'single-workout-exercise-edit',
    loadChildren: () =>
      import(
        './pages/single-workout-exercise-edit/single-workout-exercise-edit.module'
      ).then((m) => m.SingleWorkoutExerciseEditPageModule),
  },
  {
    path: 'single-workout-exercise-add',
    loadChildren: () =>
      import(
        './pages/single-workout-exercise-add/single-workout-exercise-add.module'
      ).then((m) => m.SingleWorkoutExerciseAddPageModule),
  },
  {
    path: 'single-workout-exercise-open',
    loadChildren: () =>
      import(
        './pages/single-workout-exercise-open/single-workout-exercise-open.module'
      ).then((m) => m.SingleWorkoutExerciseOpenPageModule),
  },
  {
    path: 'me',
    loadChildren: () =>
      import('./pages/me/me.module').then((m) => m.MePageModule),
  },
  {
    path: 'diary',
    loadChildren: () =>
      import('./pages/diary/diary.module').then((m) => m.DiaryPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublicFramePage } from './pages/public-frame/public-frame.page';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./pages/public-frame/public-frame.module').then((m) => m.PublicFramePageModule),
  },
  {
    path: 'private',
    loadChildren: () => import('./pages/private-frame/private-frame.module').then(m => m.PrivateFramePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

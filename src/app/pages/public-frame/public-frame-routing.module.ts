import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicFramePage } from './public-frame.page';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('../sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicFramePageRoutingModule { }

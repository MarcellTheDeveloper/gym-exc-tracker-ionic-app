import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicFramePage } from './public-frame.page';

const routes: Routes = [
  {
    path: '',
    component: PublicFramePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicFramePageRoutingModule {}

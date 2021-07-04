import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateFramePage } from './private-frame.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateFramePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateFramePageRoutingModule {}

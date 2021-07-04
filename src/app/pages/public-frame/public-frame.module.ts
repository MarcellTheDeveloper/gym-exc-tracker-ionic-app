import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicFramePageRoutingModule } from './public-frame-routing.module';

import { PublicFramePage } from './public-frame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicFramePageRoutingModule
  ],
  declarations: [PublicFramePage]
})
export class PublicFramePageModule {}

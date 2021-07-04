import { SharedModule } from './../../modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PrivateFramePageRoutingModule } from './private-frame-routing.module';

import { PrivateFramePage } from './private-frame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateFramePageRoutingModule,
    SharedModule,
    BrowserModule,
  ],
  declarations: [PrivateFramePage],
})
export class PrivateFramePageModule {}

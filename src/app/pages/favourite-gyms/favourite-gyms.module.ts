import { SharedModule } from './../../modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteGymsPageRoutingModule } from './favourite-gyms-routing.module';

import { FavouriteGymsPage } from './favourite-gyms.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteGymsPageRoutingModule,
    SharedModule,
  ],
  declarations: [FavouriteGymsPage],
})
export class FavouriteGymsPageModule {}

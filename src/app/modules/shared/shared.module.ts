import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleWorkoutDayComponent } from 'src/app/components/single-workout-day/single-workout-day.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SingleWorkoutDayComponent, HeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [SingleWorkoutDayComponent, HeaderComponent],
})
export class SharedModule {}

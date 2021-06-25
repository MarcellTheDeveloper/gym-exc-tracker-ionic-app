import { Component, OnInit } from '@angular/core';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentDay = new Date().getDay();
  exercisesByDay: any;
  daysArr = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  constructor(private dayHandler: GymDayHandlerService) {}

  ngOnInit() {
    this.exercisesByDay = this.dayHandler.getExercisesByDay();
    this.daysArr = this.daysArr
      .slice(this.currentDay)
      .concat(this.daysArr.slice(0, this.currentDay));
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentDay = new Date().getDay();
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor() {}

  ngOnInit() {
    this.days = this.days
      .slice(this.currentDay)
      .concat(this.days.slice(0, this.currentDay));
  }
}

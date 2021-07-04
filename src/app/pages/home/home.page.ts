import { FireAuthService } from 'src/app/services/fire-auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { FireDbService } from 'src/app/services/fire-db.service';
import { CapStorageService } from 'src/app/services/cap-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentDay;
  exercisesByDay: any = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };
  daysArr = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  constructor(
    private dayHandler: GymDayHandlerService,
    public firebaseAuth: AngularFireAuth,
    public fireAuthService: FireAuthService,
    private fireDbService: FireDbService,
    public capStorage: CapStorageService
  ) {}

  async ngOnInit() {
    const userId = await this.capStorage.getUserId();

    this.fireDbService.getExercisesDoc(userId).subscribe((udpatedExc) => {
      console.log('updatedex', udpatedExc);
      if (udpatedExc) {
        this.exercisesByDay = udpatedExc;
        this.dayHandler.updateExercisesByDayFromDb(udpatedExc);
      }
    });

    this.currentDay = new Date().getDay();

    this.daysArr = this.daysArr
      .slice(this.currentDay)
      .concat(this.daysArr.slice(0, this.currentDay));
  }
}

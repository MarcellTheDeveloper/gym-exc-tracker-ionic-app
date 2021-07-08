import { Router } from '@angular/router';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { CapStorageService } from './services/cap-storage.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireAuthService } from './services/fire-auth.service';
import { LoadingController } from '@ionic/angular';
import { FireDbService } from './services/fire-db.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  // isLoggedIn = false;
  // userEmail = '';
  // userId = '';
  // udpatedExc;
  // loginSubscription;
  // userEmailSubscription;
  constructor(
    public fireAuthService: FireAuthService,
    public firebaseAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public capStorage: CapStorageService,
    private router: Router
  ) { }
  async ngOnInit()
  {
    // const loading = await this.loadingController.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   duration: 500,
    // });
    // await loading.present();

    const logged = await this.capStorage.getIsLoggedIn();
    if (logged)
    {
      this.router.navigate(['/private/home']);
    } else
    {
      this.router.navigate(['/public/login']);
    }


    // this.isLoggedIn = logged ? true : false;
    // console.log(logged, this.userEmail);

    // const { role, data } = await loading.onDidDismiss();
  }

  // logOut()
  // {
  //   this.fireAuthService.logout();
  // }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-private-frame',
  templateUrl: './private-frame.page.html',
  styleUrls: ['./private-frame.page.scss'],
})
export class PrivateFramePage implements OnInit
{
  isLoggedIn = false;
  userEmail = '';
  userId = '';
  udpatedExc;
  loginSubscription;
  userEmailSubscription;
  constructor(
    public fireAuthService: FireAuthService,
    public firebaseAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public capStorage: CapStorageService
  ) { }
  async ngOnInit()
  {
    this.userEmail = await this.capStorage.getUserEmail();

  }

  logOut()
  {
    this.fireAuthService.logout();
  }

}

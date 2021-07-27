import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { LanguageService } from 'src/app/services/language.service';
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
  languageName;
  language;
  constructor(
    public fireAuthService: FireAuthService,
    public firebaseAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public capStorage: CapStorageService,
    public languageService: LanguageService
  ) { }
  async ngOnInit()
  {
    this.languageName = this.languageService.returnLanguage().languageName;
    this.language = this.languageService.returnLanguage().language;
    this.userEmail = await this.capStorage.getUserEmail();
  }

  logOut()
  {
    this.fireAuthService.logout();
  }
  onLangChange()
  {
    this.languageService.languageSelect(this.languageName);
  }
}

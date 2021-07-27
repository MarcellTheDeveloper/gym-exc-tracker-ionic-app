import { Router } from '@angular/router';
import { GymDayHandlerService } from 'src/app/services/gym-day-handler.service';
import { CapStorageService } from './services/cap-storage.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireAuthService } from './services/fire-auth.service';
import { LoadingController } from '@ionic/angular';
import { FireDbService } from './services/fire-db.service';
import { Route } from '@angular/compiler/src/core';
import { LanguageService } from './services/language.service';
import * as languageHu from './languages/langHU';
import * as languageEng from './languages/langENG';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  language = languageEng;
  constructor(
    public fireAuthService: FireAuthService,
    public firebaseAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public capStorage: CapStorageService,
    private router: Router,
    public languageService: LanguageService
  ) { }
  async ngOnInit()
  {
    const languages = {
      magyar: new languageHu.LanguageHu(),
      english: new languageEng.LanguageEng()
    };
    const selectedLanguageName = await this.capStorage.getLanguage();
    this.languageService.setLanguageOnInit(languages, selectedLanguageName);

    const logged = await this.capStorage.getIsLoggedIn();
    if (logged)
    {
      this.router.navigate(['/private/home']);
    } else
    {
      this.router.navigate(['/public/login']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit
{
  userEmail: string;
  language;
  constructor(
    public fireAuthService: FireAuthService,
    private capStorage: CapStorageService,
    public languageService: LanguageService
  ) { }

  async ngOnInit()
  {
    this.language = this.languageService.returnLanguage().language;
    this.userEmail = await this.capStorage.getUserEmail();
  }

  logOut()
  {
    this.fireAuthService.logout();
  }
}

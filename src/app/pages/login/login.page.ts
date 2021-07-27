import { Router } from '@angular/router';
import { CapStorageService } from './../../services/cap-storage.service';
import { FireAuthService } from './../../services/fire-auth.service';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  languageName;
  loginDetails = {
    email: '',
    password: '',
  };
  language;
  loginError;
  constructor(
    public fireAuthService: FireAuthService,
    private capStorage: CapStorageService,
    private router: Router,
    public languageService: LanguageService
  ) { }

  async ngOnInit()
  {
    this.languageName = this.languageService.returnLanguage().languageName;
    this.language = this.languageService.returnLanguage().language;
    const isLoggedIn = await this.capStorage.getIsLoggedIn();
    if (isLoggedIn)
    {
      this.router.navigate(['private/home']);
    }
  }

  async signInWithEmail()
  {
    this.loginError = await this.fireAuthService.signin(this.loginDetails.email, this.loginDetails.password);
    this.loginDetails = {
      email: '',
      password: '',
    };
  }
  async signInWithGoogle()
  {
    this.fireAuthService.loginWithGoogle();
  }
  async isLoggedIn()
  {
    this.fireAuthService.getIsLoggedIn();
  }
  onLangChange()
  {
    this.languageService.languageSelect(this.languageName);
  }
}

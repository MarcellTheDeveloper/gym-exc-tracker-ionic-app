import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit
{
  languageName;
  language;
  signupDetails = {
    email: '',
    password: '',
  };
  loginError;
  constructor(public fireAuth: FireAuthService, public languageService: LanguageService) { }

  ngOnInit()
  {
    this.languageName = this.languageService.returnLanguage().languageName;
    this.language = this.languageService.returnLanguage().language;
  }
  async signUpWithEmail()
  {
    this.loginError = await this.fireAuth.signup(this.signupDetails.email, this.signupDetails.password);
    this.signupDetails = {
      email: '',
      password: '',
    };
  }

  onLangChange()
  {
    this.languageService.languageSelect(this.languageName);
  }
}

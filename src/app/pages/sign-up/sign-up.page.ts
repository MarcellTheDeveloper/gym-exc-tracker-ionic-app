import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit
{
  signupDetails = {
    email: '',
    password: '',
  };
  loginError;
  constructor(public fireAuth: FireAuthService) { }

  ngOnInit() { }
  async signUpWithEmail()
  {
    this.loginError = await this.fireAuth.signup(this.signupDetails.email, this.signupDetails.password);
    this.signupDetails = {
      email: '',
      password: '',
    };
  }
}

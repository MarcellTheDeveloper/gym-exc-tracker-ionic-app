import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(public fireAuth: FireAuthService) {}

  ngOnInit() {}
  signUpWithEmail(email: any, password: any) {
    this.fireAuth.signup(email, password);
  }
}

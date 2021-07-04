import { Router } from '@angular/router';
import { CapStorageService } from './../../services/cap-storage.service';
import { FireAuthService } from './../../services/fire-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public fireAuthService: FireAuthService,
    private capStorage: CapStorageService,
    private router: Router
  ) {}

  async ngOnInit() {
    const isLoggedIn = await this.capStorage.getIsLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  signInWithEmail(email: any, password: any) {
    this.fireAuthService.signin(email, password);
  }
  async signInWithGoogle() {
    this.fireAuthService.loginWithGoogle();
  }
  logOut() {
    this.fireAuthService.logout();
  }
  async isLoggedIn() {
    this.fireAuthService.getIsLoggedIn();
  }
}

import { Component, OnInit } from '@angular/core';
import { CapStorageService } from 'src/app/services/cap-storage.service';
import { FireAuthService } from 'src/app/services/fire-auth.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  userEmail: string;
  constructor(
    public fireAuthService: FireAuthService,
    private capStorage: CapStorageService
  ) {}

  async ngOnInit() {
    this.userEmail = await this.capStorage.getUserEmail();
  }

  logOut() {
    this.fireAuthService.logout();
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root',
})
export class CapStorageService {
  constructor() {}

  async getIsLoggedIn() {
    const { value } = await Storage.get({ key: 'userId' });

    return value;
  }

  async getUserEmail() {
    const { value } = await Storage.get({ key: 'userEmail' });

    return value;
  }
  async getUserId() {
    const { value } = await Storage.get({ key: 'userId' });

    return value;
  }
}

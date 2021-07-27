import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
@Injectable({
  providedIn: 'root',
})
export class CapStorageService
{
  constructor() { }

  async getIsLoggedIn()
  {
    const { value } = await Storage.get({ key: 'userId' });

    return value;
  }

  async getUserEmail()
  {
    const { value } = await Storage.get({ key: 'userEmail' });

    return value;
  }
  async getUserId()
  {
    const { value } = await Storage.get({ key: 'userId' });

    return value;
  }

  async getLanguage()
  {
    const { value } = await Storage.get({ key: 'language' });

    return value;
  }
  async setLanguage(language: string)
  {
    await Storage.set({
      key: 'language',
      value: language,
    });
  }
}

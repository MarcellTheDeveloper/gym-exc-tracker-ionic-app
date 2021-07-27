import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as languageHu from '../languages/langHU';
import * as languageEng from '../languages/langENG';
import { CapStorageService } from './cap-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService
{
  selectedLanguage = 'Magyar';
  languages;
  selectedLanguageName;
  constructor(public capStorage: CapStorageService, public router: Router)
  {
  }
  languageSelect(language)
  {
    if (language === 'magyar')
    {
      this.capStorage.setLanguage(language);
      this.selectedLanguage = this.languages.magyar;

    } else if (language === 'english')
    {
      this.capStorage.setLanguage(language);
      this.selectedLanguage = this.languages.english;

    }
    location.reload();
  }
  setLanguageOnInit(languages, selectedLanguageName)
  {
    this.languages = languages;
    this.selectedLanguageName = selectedLanguageName;
    if (this.selectedLanguageName === 'magyar')
    {
      this.selectedLanguage = this.languages.magyar;
    } else if (this.selectedLanguageName === 'english')
    {
      this.selectedLanguage = this.languages.english;
    } else
    {
      this.selectedLanguage = this.languages.magyar;
    }
  }
  returnLanguage()
  {
    return { language: this.selectedLanguage, languageName: this.selectedLanguageName };
  }
}

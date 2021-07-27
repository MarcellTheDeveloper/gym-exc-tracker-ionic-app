import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-favourite-gyms',
  templateUrl: './favourite-gyms.page.html',
  styleUrls: ['./favourite-gyms.page.scss'],
})
export class FavouriteGymsPage implements OnInit
{

  constructor(public languageService: LanguageService) { }

  ngOnInit()
  {
  }

}

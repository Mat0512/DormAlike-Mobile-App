import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private localStorageService : LocalstorageService) {}

  rootPage:any = "get-started";
  userIsLoggedIn : boolean = this.localStorageService.getUserData() ? true : false ;


}

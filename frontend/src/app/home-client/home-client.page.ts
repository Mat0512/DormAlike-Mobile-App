import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccomodationService } from '../services/accomodation.service';
import { Accomodation } from '../tsInterface/Accomodation';
import { ActivatedRoute } from '@angular/router';
import { User } from '../tsInterface/User';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage {
  @ViewChild ( IonContent, { static:true })
  content: IonContent

  accomodations : Accomodation[] = [];
  user : User;

  constructor(
              private accomodationService: AccomodationService,
              private route: ActivatedRoute,
              private localStorageService: LocalstorageService
            ) { }
  
  ngOnInit() {
    this.accomodationService.getAccomodations().subscribe((accomodations) => this.accomodations = accomodations)
    this.route.queryParams.subscribe(userData => {
      this.localStorageService.setUserData(JSON.stringify(userData));
    })
  }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }
  
  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  searchTerm: any;
 
}

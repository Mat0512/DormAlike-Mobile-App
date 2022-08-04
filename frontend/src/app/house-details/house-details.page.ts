import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Accomodation } from '../tsInterface/Accomodation';
import { UserService } from '../services/user.service';
import { LocalstorageService } from '../services/localstorage.service';
import { User } from '../tsInterface/User';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.page.html',
  styleUrls: ['./house-details.page.scss'],
})
export class HouseDetailsPage implements OnInit {

  constructor(
                private alertController: AlertController,
                private route: ActivatedRoute, private userService : UserService, 
                private localStorageService: LocalstorageService
             ) {}
             
  accomodation: any;
  userReservationList: Accomodation[];
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure that you want to reserve a room in this property?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          handler: () => {
            console.log("noooo")
          }
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            console.log("yessss")

          }
        },
  
      ]
    });

    await alert.present();
  }

  // addToPrefence(accomodationId): void{
  //   this.userService.updateUser({preference: })
  // }

  ngOnInit() {
    this.route.queryParams
    .subscribe(accomodationData => {
      this.accomodation = {
        ownedBy: accomodationData.ownedBy,
        name: accomodationData.name,
        address: accomodationData.address,
        houseimg: accomodationData.houseimg,
        category: accomodationData.category,
        reservationFee: accomodationData.reservationFee,
        monthlyFee: accomodationData.monthlyFee,
        phone: accomodationData.phone,
        space: accomodationData.space,
        facilities: accomodationData.facilities,
        description: accomodationData.description,
        roomCount: accomodationData.roomCount,
        roomAvailable: accomodationData.roomAvailable,
      }
    });
  }

}


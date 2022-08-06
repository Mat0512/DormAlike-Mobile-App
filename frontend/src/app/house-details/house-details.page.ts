import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.page.html',
  styleUrls: ['./house-details.page.scss'],
})
export class HouseDetailsPage implements OnInit {

  constructor(private alertController: AlertController, private route: ActivatedRoute) {}
  accomodation: any;
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure that you want to reserve a room in this property?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm'
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(accomodationData => {
      console.log(accomodationData)

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


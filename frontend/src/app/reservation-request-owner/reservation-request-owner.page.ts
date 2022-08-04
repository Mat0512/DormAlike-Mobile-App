import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-request-owner',
  templateUrl: './reservation-request-owner.page.html',
  styleUrls: ['./reservation-request-owner.page.scss'],
})
export class ReservationRequestOwnerPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentOnHold() {
    const alert = await this.alertController.create({
      header: 'Notice',
      subHeader: 'Important message',
      message: 'Reservation request is moved to pending request.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAccept() {
    const alert = await this.alertController.create({
      header: 'Notice',
      subHeader: 'Important message',
      message: 'Reservation request is accepted and moved to completed reservation.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentDecline() {
    const alert = await this.alertController.create({
      header: 'Notice',
      subHeader: 'Important message',
      message: 'Reservation request is declined.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pending-request-owner',
  templateUrl: './pending-request-owner.page.html',
  styleUrls: ['./pending-request-owner.page.scss'],
})
export class PendingRequestOwnerPage implements OnInit {

  constructor(private alertController: AlertController) {}

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

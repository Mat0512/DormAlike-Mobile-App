import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-post-owner',
  templateUrl: './add-post-owner.page.html',
  styleUrls: ['./add-post-owner.page.scss'],
})
export class AddPostOwnerPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Saved',
      subHeader: 'Post added!',
      buttons: ['Exit']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}

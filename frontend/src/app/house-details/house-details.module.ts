import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetailsPageRoutingModule } from './house-details-routing.module';

import { HouseDetailsPage } from './house-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetailsPageRoutingModule
  ],
  declarations: [HouseDetailsPage]
})
export class HouseDetailsPageModule {}

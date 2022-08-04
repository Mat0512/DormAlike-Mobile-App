import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails2PageRoutingModule } from './house-details2-routing.module';

import { HouseDetails2Page } from './house-details2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails2PageRoutingModule
  ],
  declarations: [HouseDetails2Page]
})
export class HouseDetails2PageModule {}

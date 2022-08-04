import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA2PageRoutingModule } from './house-na2-routing.module';

import { HouseNA2Page } from './house-na2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA2PageRoutingModule
  ],
  declarations: [HouseNA2Page]
})
export class HouseNA2PageModule {}

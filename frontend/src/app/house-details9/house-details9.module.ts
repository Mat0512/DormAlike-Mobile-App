import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails9PageRoutingModule } from './house-details9-routing.module';

import { HouseDetails9Page } from './house-details9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails9PageRoutingModule
  ],
  declarations: [HouseDetails9Page]
})
export class HouseDetails9PageModule {}

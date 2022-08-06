import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails12PageRoutingModule } from './house-details12-routing.module';

import { HouseDetails12Page } from './house-details12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails12PageRoutingModule
  ],
  declarations: [HouseDetails12Page]
})
export class HouseDetails12PageModule {}

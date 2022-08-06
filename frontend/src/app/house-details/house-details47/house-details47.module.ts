import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails47PageRoutingModule } from './house-details47-routing.module';

import { HouseDetails47Page } from './house-details47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails47PageRoutingModule
  ],
  declarations: [HouseDetails47Page]
})
export class HouseDetails47PageModule {}

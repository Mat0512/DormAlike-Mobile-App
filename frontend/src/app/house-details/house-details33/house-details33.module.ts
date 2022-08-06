import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails33PageRoutingModule } from './house-details33-routing.module';

import { HouseDetails33Page } from './house-details33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails33PageRoutingModule
  ],
  declarations: [HouseDetails33Page]
})
export class HouseDetails33PageModule {}

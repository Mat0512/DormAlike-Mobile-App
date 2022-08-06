import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails28PageRoutingModule } from './house-details28-routing.module';

import { HouseDetails28Page } from './house-details28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails28PageRoutingModule
  ],
  declarations: [HouseDetails28Page]
})
export class HouseDetails28PageModule {}

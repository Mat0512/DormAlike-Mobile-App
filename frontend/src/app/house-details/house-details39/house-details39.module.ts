import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails39PageRoutingModule } from './house-details39-routing.module';

import { HouseDetails39Page } from './house-details39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails39PageRoutingModule
  ],
  declarations: [HouseDetails39Page]
})
export class HouseDetails39PageModule {}

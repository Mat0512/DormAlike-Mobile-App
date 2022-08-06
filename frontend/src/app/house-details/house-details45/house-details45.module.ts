import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails45PageRoutingModule } from './house-details45-routing.module';

import { HouseDetails45Page } from './house-details45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails45PageRoutingModule
  ],
  declarations: [HouseDetails45Page]
})
export class HouseDetails45PageModule {}

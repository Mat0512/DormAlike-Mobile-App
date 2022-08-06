import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails10PageRoutingModule } from './house-details10-routing.module';

import { HouseDetails10Page } from './house-details10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails10PageRoutingModule
  ],
  declarations: [HouseDetails10Page]
})
export class HouseDetails10PageModule {}

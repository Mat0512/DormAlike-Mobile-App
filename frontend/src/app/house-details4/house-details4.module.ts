import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails4PageRoutingModule } from './house-details4-routing.module';

import { HouseDetails4Page } from './house-details4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails4PageRoutingModule
  ],
  declarations: [HouseDetails4Page]
})
export class HouseDetails4PageModule {}

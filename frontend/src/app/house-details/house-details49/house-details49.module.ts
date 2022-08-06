import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails49PageRoutingModule } from './house-details49-routing.module';

import { HouseDetails49Page } from './house-details49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails49PageRoutingModule
  ],
  declarations: [HouseDetails49Page]
})
export class HouseDetails49PageModule {}

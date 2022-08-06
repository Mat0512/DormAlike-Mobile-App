import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails37PageRoutingModule } from './house-details37-routing.module';

import { HouseDetails37Page } from './house-details37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails37PageRoutingModule
  ],
  declarations: [HouseDetails37Page]
})
export class HouseDetails37PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails46PageRoutingModule } from './house-details46-routing.module';

import { HouseDetails46Page } from './house-details46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails46PageRoutingModule
  ],
  declarations: [HouseDetails46Page]
})
export class HouseDetails46PageModule {}

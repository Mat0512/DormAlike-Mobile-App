import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails40PageRoutingModule } from './house-details40-routing.module';

import { HouseDetails40Page } from './house-details40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails40PageRoutingModule
  ],
  declarations: [HouseDetails40Page]
})
export class HouseDetails40PageModule {}

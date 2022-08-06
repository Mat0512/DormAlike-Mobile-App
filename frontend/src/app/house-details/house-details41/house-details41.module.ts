import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails41PageRoutingModule } from './house-details41-routing.module';

import { HouseDetails41Page } from './house-details41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails41PageRoutingModule
  ],
  declarations: [HouseDetails41Page]
})
export class HouseDetails41PageModule {}

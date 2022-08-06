import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails18PageRoutingModule } from './house-details18-routing.module';

import { HouseDetails18Page } from './house-details18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails18PageRoutingModule
  ],
  declarations: [HouseDetails18Page]
})
export class HouseDetails18PageModule {}

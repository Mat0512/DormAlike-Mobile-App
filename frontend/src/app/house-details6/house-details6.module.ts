import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails6PageRoutingModule } from './house-details6-routing.module';

import { HouseDetails6Page } from './house-details6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails6PageRoutingModule
  ],
  declarations: [HouseDetails6Page]
})
export class HouseDetails6PageModule {}

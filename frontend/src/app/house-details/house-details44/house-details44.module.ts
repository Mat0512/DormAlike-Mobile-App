import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails44PageRoutingModule } from './house-details44-routing.module';

import { HouseDetails44Page } from './house-details44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails44PageRoutingModule
  ],
  declarations: [HouseDetails44Page]
})
export class HouseDetails44PageModule {}

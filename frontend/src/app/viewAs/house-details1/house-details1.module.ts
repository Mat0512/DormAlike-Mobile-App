import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails1PageRoutingModule } from './house-details1-routing.module';

import { HouseDetails1Page } from './house-details1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails1PageRoutingModule
  ],
  declarations: [HouseDetails1Page]
})
export class HouseDetails1PageModule {}

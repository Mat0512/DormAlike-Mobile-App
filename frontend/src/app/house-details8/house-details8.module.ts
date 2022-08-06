import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails8PageRoutingModule } from './house-details8-routing.module';

import { HouseDetails8Page } from './house-details8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails8PageRoutingModule
  ],
  declarations: [HouseDetails8Page]
})
export class HouseDetails8PageModule {}

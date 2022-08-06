import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails11PageRoutingModule } from './house-details11-routing.module';

import { HouseDetails11Page } from './house-details11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails11PageRoutingModule
  ],
  declarations: [HouseDetails11Page]
})
export class HouseDetails11PageModule {}

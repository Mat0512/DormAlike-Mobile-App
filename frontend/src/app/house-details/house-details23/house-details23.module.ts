import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails23PageRoutingModule } from './house-details23-routing.module';

import { HouseDetails23Page } from './house-details23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails23PageRoutingModule
  ],
  declarations: [HouseDetails23Page]
})
export class HouseDetails23PageModule {}

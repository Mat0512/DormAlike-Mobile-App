import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails17PageRoutingModule } from './house-details17-routing.module';

import { HouseDetails17Page } from './house-details17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails17PageRoutingModule
  ],
  declarations: [HouseDetails17Page]
})
export class HouseDetails17PageModule {}

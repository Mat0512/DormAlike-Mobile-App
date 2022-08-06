import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails36PageRoutingModule } from './house-details36-routing.module';

import { HouseDetails36Page } from './house-details36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails36PageRoutingModule
  ],
  declarations: [HouseDetails36Page]
})
export class HouseDetails36PageModule {}

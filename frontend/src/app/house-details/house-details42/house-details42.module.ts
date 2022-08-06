import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails42PageRoutingModule } from './house-details42-routing.module';

import { HouseDetails42Page } from './house-details42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails42PageRoutingModule
  ],
  declarations: [HouseDetails42Page]
})
export class HouseDetails42PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails13PageRoutingModule } from './house-details13-routing.module';

import { HouseDetails13Page } from './house-details13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails13PageRoutingModule
  ],
  declarations: [HouseDetails13Page]
})
export class HouseDetails13PageModule {}

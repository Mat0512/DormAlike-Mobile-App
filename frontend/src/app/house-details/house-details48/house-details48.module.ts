import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails48PageRoutingModule } from './house-details48-routing.module';

import { HouseDetails48Page } from './house-details48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails48PageRoutingModule
  ],
  declarations: [HouseDetails48Page]
})
export class HouseDetails48PageModule {}

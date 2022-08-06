import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails43PageRoutingModule } from './house-details43-routing.module';

import { HouseDetails43Page } from './house-details43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails43PageRoutingModule
  ],
  declarations: [HouseDetails43Page]
})
export class HouseDetails43PageModule {}

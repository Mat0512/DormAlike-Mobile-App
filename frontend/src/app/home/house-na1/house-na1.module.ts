import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA1PageRoutingModule } from './house-na1-routing.module';

import { HouseNA1Page } from './house-na1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA1PageRoutingModule
  ],
  declarations: [HouseNA1Page]
})
export class HouseNA1PageModule {}

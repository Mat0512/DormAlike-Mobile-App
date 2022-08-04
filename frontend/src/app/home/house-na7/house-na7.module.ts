import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA7PageRoutingModule } from './house-na7-routing.module';

import { HouseNA7Page } from './house-na7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA7PageRoutingModule
  ],
  declarations: [HouseNA7Page]
})
export class HouseNA7PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA9PageRoutingModule } from './house-na9-routing.module';

import { HouseNA9Page } from './house-na9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA9PageRoutingModule
  ],
  declarations: [HouseNA9Page]
})
export class HouseNA9PageModule {}

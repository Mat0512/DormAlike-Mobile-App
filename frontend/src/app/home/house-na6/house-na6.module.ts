import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA6PageRoutingModule } from './house-na6-routing.module';

import { HouseNA6Page } from './house-na6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA6PageRoutingModule
  ],
  declarations: [HouseNA6Page]
})
export class HouseNA6PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA4PageRoutingModule } from './house-na4-routing.module';

import { HouseNA4Page } from './house-na4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA4PageRoutingModule
  ],
  declarations: [HouseNA4Page]
})
export class HouseNA4PageModule {}

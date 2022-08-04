import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA8PageRoutingModule } from './house-na8-routing.module';

import { HouseNA8Page } from './house-na8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA8PageRoutingModule
  ],
  declarations: [HouseNA8Page]
})
export class HouseNA8PageModule {}

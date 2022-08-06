import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails30PageRoutingModule } from './house-details30-routing.module';

import { HouseDetails30Page } from './house-details30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails30PageRoutingModule
  ],
  declarations: [HouseDetails30Page]
})
export class HouseDetails30PageModule {}

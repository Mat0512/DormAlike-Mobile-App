import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails21PageRoutingModule } from './house-details21-routing.module';

import { HouseDetails21Page } from './house-details21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails21PageRoutingModule
  ],
  declarations: [HouseDetails21Page]
})
export class HouseDetails21PageModule {}

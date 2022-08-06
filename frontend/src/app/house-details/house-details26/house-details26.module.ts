import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails26PageRoutingModule } from './house-details26-routing.module';

import { HouseDetails26Page } from './house-details26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails26PageRoutingModule
  ],
  declarations: [HouseDetails26Page]
})
export class HouseDetails26PageModule {}

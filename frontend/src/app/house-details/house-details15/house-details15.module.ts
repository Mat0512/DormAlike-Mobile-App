import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails15PageRoutingModule } from './house-details15-routing.module';

import { HouseDetails15Page } from './house-details15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails15PageRoutingModule
  ],
  declarations: [HouseDetails15Page]
})
export class HouseDetails15PageModule {}

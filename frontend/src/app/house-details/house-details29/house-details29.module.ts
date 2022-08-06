import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails29PageRoutingModule } from './house-details29-routing.module';

import { HouseDetails29Page } from './house-details29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails29PageRoutingModule
  ],
  declarations: [HouseDetails29Page]
})
export class HouseDetails29PageModule {}

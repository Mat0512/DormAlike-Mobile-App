import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails35PageRoutingModule } from './house-details35-routing.module';

import { HouseDetails35Page } from './house-details35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails35PageRoutingModule
  ],
  declarations: [HouseDetails35Page]
})
export class HouseDetails35PageModule {}

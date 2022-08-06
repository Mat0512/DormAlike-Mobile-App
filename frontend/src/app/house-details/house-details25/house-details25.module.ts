import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails25PageRoutingModule } from './house-details25-routing.module';

import { HouseDetails25Page } from './house-details25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails25PageRoutingModule
  ],
  declarations: [HouseDetails25Page]
})
export class HouseDetails25PageModule {}

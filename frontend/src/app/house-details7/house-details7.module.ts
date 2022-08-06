import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails7PageRoutingModule } from './house-details7-routing.module';

import { HouseDetails7Page } from './house-details7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails7PageRoutingModule
  ],
  declarations: [HouseDetails7Page]
})
export class HouseDetails7PageModule {}

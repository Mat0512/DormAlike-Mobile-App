import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails32PageRoutingModule } from './house-details32-routing.module';

import { HouseDetails32Page } from './house-details32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails32PageRoutingModule
  ],
  declarations: [HouseDetails32Page]
})
export class HouseDetails32PageModule {}

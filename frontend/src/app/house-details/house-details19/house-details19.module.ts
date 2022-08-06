import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails19PageRoutingModule } from './house-details19-routing.module';

import { HouseDetails19Page } from './house-details19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails19PageRoutingModule
  ],
  declarations: [HouseDetails19Page]
})
export class HouseDetails19PageModule {}

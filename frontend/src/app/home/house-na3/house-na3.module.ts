import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA3PageRoutingModule } from './house-na3-routing.module';

import { HouseNA3Page } from './house-na3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA3PageRoutingModule
  ],
  declarations: [HouseNA3Page]
})
export class HouseNA3PageModule {}

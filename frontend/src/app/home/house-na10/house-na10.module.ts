import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseNA10PageRoutingModule } from './house-na10-routing.module';

import { HouseNA10Page } from './house-na10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseNA10PageRoutingModule
  ],
  declarations: [HouseNA10Page]
})
export class HouseNA10PageModule {}

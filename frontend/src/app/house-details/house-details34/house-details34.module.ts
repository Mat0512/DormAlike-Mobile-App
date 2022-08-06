import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails34PageRoutingModule } from './house-details34-routing.module';

import { HouseDetails34Page } from './house-details34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails34PageRoutingModule
  ],
  declarations: [HouseDetails34Page]
})
export class HouseDetails34PageModule {}

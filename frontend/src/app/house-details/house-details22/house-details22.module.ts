import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails22PageRoutingModule } from './house-details22-routing.module';

import { HouseDetails22Page } from './house-details22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails22PageRoutingModule
  ],
  declarations: [HouseDetails22Page]
})
export class HouseDetails22PageModule {}

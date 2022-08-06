import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails20PageRoutingModule } from './house-details20-routing.module';

import { HouseDetails20Page } from './house-details20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails20PageRoutingModule
  ],
  declarations: [HouseDetails20Page]
})
export class HouseDetails20PageModule {}

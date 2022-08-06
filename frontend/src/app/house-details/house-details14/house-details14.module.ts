import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails14PageRoutingModule } from './house-details14-routing.module';

import { HouseDetails14Page } from './house-details14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails14PageRoutingModule
  ],
  declarations: [HouseDetails14Page]
})
export class HouseDetails14PageModule {}

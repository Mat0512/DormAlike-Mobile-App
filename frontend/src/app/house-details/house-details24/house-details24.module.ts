import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails24PageRoutingModule } from './house-details24-routing.module';

import { HouseDetails24Page } from './house-details24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails24PageRoutingModule
  ],
  declarations: [HouseDetails24Page]
})
export class HouseDetails24PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails5PageRoutingModule } from './house-details5-routing.module';

import { HouseDetails5Page } from './house-details5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails5PageRoutingModule
  ],
  declarations: [HouseDetails5Page]
})
export class HouseDetails5PageModule {}

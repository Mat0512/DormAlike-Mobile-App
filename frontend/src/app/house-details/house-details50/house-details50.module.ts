import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDetails50PageRoutingModule } from './house-details50-routing.module';

import { HouseDetails50Page } from './house-details50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDetails50PageRoutingModule
  ],
  declarations: [HouseDetails50Page]
})
export class HouseDetails50PageModule {}

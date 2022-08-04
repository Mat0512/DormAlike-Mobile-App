import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndConditionsNAPageRoutingModule } from './terms-and-conditions-na-routing.module';

import { TermsAndConditionsNAPage } from './terms-and-conditions-na.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsAndConditionsNAPageRoutingModule
  ],
  declarations: [TermsAndConditionsNAPage]
})
export class TermsAndConditionsNAPageModule {}

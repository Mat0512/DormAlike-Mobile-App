import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyNAPageRoutingModule } from './privacy-policy-na-routing.module';

import { PrivacyPolicyNAPage } from './privacy-policy-na.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyNAPageRoutingModule
  ],
  declarations: [PrivacyPolicyNAPage]
})
export class PrivacyPolicyNAPageModule {}

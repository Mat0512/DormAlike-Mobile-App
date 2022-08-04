import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageOwnerPageRoutingModule } from './post-page-owner-routing.module';

import { PostPageOwnerPage } from './post-page-owner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageOwnerPageRoutingModule
  ],
  declarations: [PostPageOwnerPage]
})
export class PostPageOwnerPageModule {}

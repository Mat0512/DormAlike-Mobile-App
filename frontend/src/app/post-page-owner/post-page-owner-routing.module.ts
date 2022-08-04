import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageOwnerPage } from './post-page-owner.page';

const routes: Routes = [
  {
    path: '',
    component: PostPageOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPageOwnerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOwnerPage } from './home-owner.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomeOwnerPage,
    children : [
      {
        path: 'home-owner',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/home-owner/home-owner.module').then(m => m.HomeOwnerPageModule)
          }
        ]
      },
      {
        path: 'post-owner',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/post-owner/post-owner.module').then(m => m.PostOwnerPageModule)
          }
        ]
      },
      {
        path: 'profile-owner',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/profile-owner/profile-owner.module').then(m => m.ProfileOwnerPageModule)
          }
        ]
      },
      {
        path: 'logout-owner',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/logout-owner/logout-owner.module').then(m => m.LogoutOwnerPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home-owner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home-owner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOwnerPageRoutingModule {}

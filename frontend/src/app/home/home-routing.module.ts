import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'house-na1',
    loadChildren: () => import('./house-na1/house-na1.module').then( m => m.HouseNA1PageModule)
  },
  {
    path: 'house-na2',
    loadChildren: () => import('./house-na2/house-na2.module').then( m => m.HouseNA2PageModule)
  },
  {
    path: 'house-na3',
    loadChildren: () => import('./house-na3/house-na3.module').then( m => m.HouseNA3PageModule)
  },
  {
    path: 'house-na4',
    loadChildren: () => import('./house-na4/house-na4.module').then( m => m.HouseNA4PageModule)
  },
  {
    path: 'house-na5',
    loadChildren: () => import('./house-na5/house-na5.module').then( m => m.HouseNA5PageModule)
  },
  {
    path: 'house-na6',
    loadChildren: () => import('./house-na6/house-na6.module').then( m => m.HouseNA6PageModule)
  },
  {
    path: 'house-na7',
    loadChildren: () => import('./house-na7/house-na7.module').then( m => m.HouseNA7PageModule)
  },
  {
    path: 'house-na8',
    loadChildren: () => import('./house-na8/house-na8.module').then( m => m.HouseNA8PageModule)
  },
  {
    path: 'house-na9',
    loadChildren: () => import('./house-na9/house-na9.module').then( m => m.HouseNA9PageModule)
  },
  {
    path: 'house-na10',
    loadChildren: () => import('./house-na10/house-na10.module').then( m => m.HouseNA10PageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

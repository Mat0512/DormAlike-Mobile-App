import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetailsPage } from './house-details.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDetailsPage
  },
  {
    path: 'house-details11',
    loadChildren: () => import('./house-details11/house-details11.module').then( m => m.HouseDetails11PageModule)
  },
  {
    path: 'house-details12',
    loadChildren: () => import('./house-details12/house-details12.module').then( m => m.HouseDetails12PageModule)
  },
  {
    path: 'house-details13',
    loadChildren: () => import('./house-details13/house-details13.module').then( m => m.HouseDetails13PageModule)
  },
  {
    path: 'house-details14',
    loadChildren: () => import('./house-details14/house-details14.module').then( m => m.HouseDetails14PageModule)
  },
  {
    path: 'house-details15',
    loadChildren: () => import('./house-details15/house-details15.module').then( m => m.HouseDetails15PageModule)
  },
  {
    path: 'house-details16',
    loadChildren: () => import('./house-details16/house-details16.module').then( m => m.HouseDetails16PageModule)
  },
  {
    path: 'house-details17',
    loadChildren: () => import('./house-details17/house-details17.module').then( m => m.HouseDetails17PageModule)
  },
  {
    path: 'house-details18',
    loadChildren: () => import('./house-details18/house-details18.module').then( m => m.HouseDetails18PageModule)
  },
  {
    path: 'house-details19',
    loadChildren: () => import('./house-details19/house-details19.module').then( m => m.HouseDetails19PageModule)
  },
  {
    path: 'house-details20',
    loadChildren: () => import('./house-details20/house-details20.module').then( m => m.HouseDetails20PageModule)
  },
  {
    path: 'house-details21',
    loadChildren: () => import('./house-details21/house-details21.module').then( m => m.HouseDetails21PageModule)
  },
  {
    path: 'house-details22',
    loadChildren: () => import('./house-details22/house-details22.module').then( m => m.HouseDetails22PageModule)
  },
  {
    path: 'house-details23',
    loadChildren: () => import('./house-details23/house-details23.module').then( m => m.HouseDetails23PageModule)
  },
  {
    path: 'house-details24',
    loadChildren: () => import('./house-details24/house-details24.module').then( m => m.HouseDetails24PageModule)
  },
  {
    path: 'house-details25',
    loadChildren: () => import('./house-details25/house-details25.module').then( m => m.HouseDetails25PageModule)
  },
  {
    path: 'house-details26',
    loadChildren: () => import('./house-details26/house-details26.module').then( m => m.HouseDetails26PageModule)
  },
  {
    path: 'house-details27',
    loadChildren: () => import('./house-details27/house-details27.module').then( m => m.HouseDetails27PageModule)
  },
  {
    path: 'house-details28',
    loadChildren: () => import('./house-details28/house-details28.module').then( m => m.HouseDetails28PageModule)
  },
  {
    path: 'house-details29',
    loadChildren: () => import('./house-details29/house-details29.module').then( m => m.HouseDetails29PageModule)
  },
  {
    path: 'house-details30',
    loadChildren: () => import('./house-details30/house-details30.module').then( m => m.HouseDetails30PageModule)
  },
  {
    path: 'house-details31',
    loadChildren: () => import('./house-details31/house-details31.module').then( m => m.HouseDetails31PageModule)
  },
  {
    path: 'house-details32',
    loadChildren: () => import('./house-details32/house-details32.module').then( m => m.HouseDetails32PageModule)
  },
  {
    path: 'house-details33',
    loadChildren: () => import('./house-details33/house-details33.module').then( m => m.HouseDetails33PageModule)
  },
  {
    path: 'house-details34',
    loadChildren: () => import('./house-details34/house-details34.module').then( m => m.HouseDetails34PageModule)
  },
  {
    path: 'house-details35',
    loadChildren: () => import('./house-details35/house-details35.module').then( m => m.HouseDetails35PageModule)
  },
  {
    path: 'house-details36',
    loadChildren: () => import('./house-details36/house-details36.module').then( m => m.HouseDetails36PageModule)
  },
  {
    path: 'house-details37',
    loadChildren: () => import('./house-details37/house-details37.module').then( m => m.HouseDetails37PageModule)
  },
  {
    path: 'house-details38',
    loadChildren: () => import('./house-details38/house-details38.module').then( m => m.HouseDetails38PageModule)
  },
  {
    path: 'house-details39',
    loadChildren: () => import('./house-details39/house-details39.module').then( m => m.HouseDetails39PageModule)
  },
  {
    path: 'house-details40',
    loadChildren: () => import('./house-details40/house-details40.module').then( m => m.HouseDetails40PageModule)
  },
  {
    path: 'house-details41',
    loadChildren: () => import('./house-details41/house-details41.module').then( m => m.HouseDetails41PageModule)
  },
  {
    path: 'house-details42',
    loadChildren: () => import('./house-details42/house-details42.module').then( m => m.HouseDetails42PageModule)
  },
  {
    path: 'house-details43',
    loadChildren: () => import('./house-details43/house-details43.module').then( m => m.HouseDetails43PageModule)
  },
  {
    path: 'house-details44',
    loadChildren: () => import('./house-details44/house-details44.module').then( m => m.HouseDetails44PageModule)
  },
  {
    path: 'house-details45',
    loadChildren: () => import('./house-details45/house-details45.module').then( m => m.HouseDetails45PageModule)
  },
  {
    path: 'house-details46',
    loadChildren: () => import('./house-details46/house-details46.module').then( m => m.HouseDetails46PageModule)
  },
  {
    path: 'house-details47',
    loadChildren: () => import('./house-details47/house-details47.module').then( m => m.HouseDetails47PageModule)
  },
  {
    path: 'house-details48',
    loadChildren: () => import('./house-details48/house-details48.module').then( m => m.HouseDetails48PageModule)
  },
  {
    path: 'house-details49',
    loadChildren: () => import('./house-details49/house-details49.module').then( m => m.HouseDetails49PageModule)
  },
  {
    path: 'house-details50',
    loadChildren: () => import('./house-details50/house-details50.module').then( m => m.HouseDetails50PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDetailsPageRoutingModule {}

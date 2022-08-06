import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
  {
    path: 'login-client',
    loadChildren: () => import('./login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./login-owner/login-owner.module').then( m => m.LoginOwnerPageModule)
  },
  {
    path: 'house-details',
    loadChildren: () => import('./house-details/house-details.module').then( m => m.HouseDetailsPageModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('./register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'log-in-as',
    loadChildren: () => import('./log-in-as/log-in-as.module').then( m => m.LogInAsPageModule)
  },
  {
    path: 'register-as',
    loadChildren: () => import('./register-as/register-as.module').then( m => m.RegisterAsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module').then( m => m.TermsAndConditionsPageModule)
  },
  {
    path: 'add-post-owner',
    loadChildren: () => import('./add-post-owner/add-post-owner.module').then( m => m.AddPostOwnerPageModule)
  },
  {
    path: 'post-page-owner',
    loadChildren: () => import('./post-page-owner/post-page-owner.module').then( m => m.PostPageOwnerPageModule)
  },
  {
    path: 'menu-client',
    loadChildren: () => import('./menu-client/menu-client.module').then( m => m.MenuClientPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then( m => m.HomeClientPageModule)
  },
  {
    path: 'register-owner',
    loadChildren: () => import('./register-owner/register-owner.module').then( m => m.RegisterOwnerPageModule)
  },
  {
    path: 'home-owner',
    loadChildren: () => import('./home-owner/home-owner.module').then( m => m.HomeOwnerPageModule)
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./profile-client/profile-client.module').then( m => m.ProfileClientPageModule)
  },
  {
    path: 'profile-owner',
    loadChildren: () => import('./profile-owner/profile-owner.module').then( m => m.ProfileOwnerPageModule)
  },
  {
    path: 'edit-profile-client',
    loadChildren: () => import('./edit-profile-client/edit-profile-client.module').then( m => m.EditProfileClientPageModule)
  },
  {
    path: 'edit-profile-owner',
    loadChildren: () => import('./edit-profile-owner/edit-profile-owner.module').then( m => m.EditProfileOwnerPageModule)
  },
  {
    path: 'preferences-client',
    loadChildren: () => import('./preferences-client/preferences-client.module').then( m => m.PreferencesClientPageModule)
  },
  {
    path: 'reservation-request-owner',
    loadChildren: () => import('./reservation-request-owner/reservation-request-owner.module').then( m => m.ReservationRequestOwnerPageModule)
  },
  {
    path: 'pending-request-owner',
    loadChildren: () => import('./pending-request-owner/pending-request-owner.module').then( m => m.PendingRequestOwnerPageModule)
  },
  {
    path: 'completed-reservation-owner',
    loadChildren: () => import('./completed-reservation-owner/completed-reservation-owner.module').then( m => m.CompletedReservationOwnerPageModule)
  },
  {
    path: 'house-details2',
    loadChildren: () => import('./house-details2/house-details2.module').then( m => m.HouseDetails2PageModule)
  },
  {
    path: 'house-details3',
    loadChildren: () => import('./house-details3/house-details3.module').then( m => m.HouseDetails3PageModule)
  },
  {
    path: 'house-details4',
    loadChildren: () => import('./house-details4/house-details4.module').then( m => m.HouseDetails4PageModule)
  },
  {
    path: 'house-details5',
    loadChildren: () => import('./house-details5/house-details5.module').then( m => m.HouseDetails5PageModule)
  },
  {
    path: 'house-details6',
    loadChildren: () => import('./house-details6/house-details6.module').then( m => m.HouseDetails6PageModule)
  },
  {
    path: 'house-details7',
    loadChildren: () => import('./house-details7/house-details7.module').then( m => m.HouseDetails7PageModule)
  },
  {
    path: 'house-details8',
    loadChildren: () => import('./house-details8/house-details8.module').then( m => m.HouseDetails8PageModule)
  },
  {
    path: 'house-details9',
    loadChildren: () => import('./house-details9/house-details9.module').then( m => m.HouseDetails9PageModule)
  },
  {
    path: 'house-details10',
    loadChildren: () => import('./house-details10/house-details10.module').then( m => m.HouseDetails10PageModule)
  },
  {
    path: 'reserved-property-client',
    loadChildren: () => import('./reserved-property-client/reserved-property-client.module').then( m => m.ReservedPropertyClientPageModule)
  },
  {
    path: 'house-details1',
    loadChildren: () => import('./viewAs/house-details1/house-details1.module').then( m => m.HouseDetails1PageModule)
  },
  {
    path: 'house-details2',
    loadChildren: () => import('./viewAs/house-details2/house-details2.module').then( m => m.HouseDetails2PageModule)
  },
  {
    path: 'house-details3',
    loadChildren: () => import('./viewAs/house-details3/house-details3.module').then( m => m.HouseDetails3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

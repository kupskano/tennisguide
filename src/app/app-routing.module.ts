import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'startpack-details',
    loadChildren: () => import('./startpack-details/startpack-details.module').then( m => m.StartpackDetailsPageModule)
  },
  {
    path: 'racquet',
    loadChildren: () => import('./racquet/racquet.module').then( m => m.RacquetPageModule)
  },
  {
    path: 'strings',
    loadChildren: () => import('./strings/strings.module').then( m => m.StringsPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./accessories/accessories.module').then( m => m.AccessoriesPageModule)
  },
  {
    path: 'court',
    loadChildren: () => import('./court/court.module').then( m => m.CourtPageModule)
  },
  {
    path: 'etiquette',
    loadChildren: () => import('./etiquette/etiquette.module').then( m => m.EtiquettePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./datadiri/datadiri.module').then( m => m.DatadiriPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'datadiris',
    loadChildren: () => import('./datadiris/datadiris.module').then( m => m.DatadirisPageModule)
  },
  {
    path: 'datadiriss',
    loadChildren: () => import('./datadiriss/datadiriss.module').then( m => m.DatadirissPageModule)
  },
  {
    path: 'imthasil',
    loadChildren: () => import('./imthasil/imthasil.module').then( m => m.ImthasilPageModule)
  },
  {
    path: 'kalkulatorkalori',
    loadChildren: () => import('./kalkulatorkalori/kalkulatorkalori.module').then( m => m.KalkulatorkaloriPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

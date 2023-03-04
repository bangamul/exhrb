import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatadirisPage } from './datadiris.page';

const routes: Routes = [
  {
    path: '',
    component: DatadirisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatadirisPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartpackDetailsPage } from './startpack-details.page';

const routes: Routes = [
  {
    path: '',
    component: StartpackDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartpackDetailsPageRoutingModule {}

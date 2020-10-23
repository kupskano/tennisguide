import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StringsPage } from './strings.page';

const routes: Routes = [
  {
    path: '',
    component: StringsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StringsPageRoutingModule {}

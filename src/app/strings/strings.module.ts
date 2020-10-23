import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StringsPageRoutingModule } from './strings-routing.module';

import { StringsPage } from './strings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StringsPageRoutingModule
  ],
  declarations: [StringsPage]
})
export class StringsPageModule {}

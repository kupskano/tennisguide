import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartpackDetailsPageRoutingModule } from './startpack-details-routing.module';

import { StartpackDetailsPage } from './startpack-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartpackDetailsPageRoutingModule
  ],
  declarations: [StartpackDetailsPage]
})
export class StartpackDetailsPageModule {}

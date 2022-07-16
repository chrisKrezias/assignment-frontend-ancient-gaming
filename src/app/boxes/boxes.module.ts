import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesListComponent } from './pages/boxes-list/boxes-list.component';
import { BoxDetailsComponent } from './pages/box-details/box-details.component';
import { BoxesService } from './services/boxes.service';


@NgModule({
  declarations: [
    BoxesListComponent,
    BoxDetailsComponent
  ],
  imports: [
    CommonModule,
    BoxesRoutingModule
  ],
  providers: [BoxesService]
})
export class BoxesModule { }

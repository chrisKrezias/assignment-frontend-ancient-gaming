import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesListComponent } from './pages/boxes-list/boxes-list.component';
import { BoxDetailsComponent } from './pages/box-details/box-details.component';
import { BoxesService } from './services/boxes.service';
import { CardComponent } from './components/card/card.component';
import { BoxDetailsCardComponent } from './components/box-details-card/box-details-card.component';
import { ItemDetailsCardComponent } from './components/item-details-card/item-details-card.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    BoxesListComponent,
    BoxDetailsComponent,
    CardComponent,
    BoxDetailsCardComponent,
    ItemDetailsCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BoxesRoutingModule
  ],
  providers: [BoxesService]
})
export class BoxesModule { }

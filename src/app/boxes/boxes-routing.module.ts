import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailsComponent } from './pages/box-details/box-details.component';
import { BoxesListComponent } from './pages/boxes-list/boxes-list.component';

const routes: Routes = [
  { path: '', component: BoxesListComponent },
  { path: ':id', component: BoxDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FavoritoComponent } from './favorito/favorito.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'favorito',
    component: FavoritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }

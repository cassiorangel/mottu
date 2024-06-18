import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritoComponent } from './favorito/favorito.component';


@NgModule({
  declarations: [
    ListComponent,
    FavoritoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AplicationRoutingModule
  ]
})
export class AplicationModule { }

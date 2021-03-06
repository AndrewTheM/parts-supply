import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartComponent} from './part/part.component';
import {SupplierComponent} from './supplier/supplier.component';
import {SupplyComponent} from './supply/supply.component';

const routes: Routes = [
  {path: 'parts', component: PartComponent},
  {path: 'suppliers', component: SupplierComponent},
  {path: 'supplies', component: SupplyComponent},
  {path: '**', redirectTo: 'parts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

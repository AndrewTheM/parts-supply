import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartComponent } from './part/part.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplyComponent } from './supply/supply.component';
import {PartService} from './service/part.service';
import {SupplierService} from './service/supplier.service';
import {SupplyService} from './service/supply.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: PartComponent},
  {path: 'parts', component: PartComponent},
  {path: 'suppliers', component: SupplierComponent},
  {path: 'supplies', component: SupplyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PartComponent,
    SupplierComponent,
    SupplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PartService,
    SupplierService,
    SupplyService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

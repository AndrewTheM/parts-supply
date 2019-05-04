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
    FormsModule
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

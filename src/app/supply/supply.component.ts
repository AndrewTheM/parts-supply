import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SupplyService} from '../service/supply.service';
import {Supply} from '../model/supply';
import {SupplierService} from '../service/supplier.service';
import {PartService} from '../service/part.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplyComponent implements OnInit {

  supplies: any;
  suppliers: any;
  parts: any;
  supply: Supply = new Supply();
  constructor(private supplySvc: SupplyService,
              private supplierSvc: SupplierService,
              private partSvc: PartService) { }

  ngOnInit() {
    this.load();
    this.loadSuppliers();
    this.loadParts();
  }

  load() {
    this.supplySvc.getAllSupplies().subscribe(data => {
      this.supplies = data;
      this.supply = new Supply();
    });
  }

  loadSuppliers() {
    this.supplierSvc.getAllSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  loadParts() {
    this.partSvc.getAllParts().subscribe(data => {
      this.parts = data;
    });
  }

  create() {
    this.supplySvc.create(this.supply).subscribe(() => {
      this.load();
    });
  }

  update(supply: Supply) {
    this.supplySvc.update(supply).subscribe(() => {
      this.load();
    });
  }

  delete(id: string) {
    this.supplySvc.delete(id).subscribe(() => {
      this.load();
    });
  }
}

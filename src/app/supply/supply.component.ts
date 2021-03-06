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
  supplyToUpdate: Supply;
  field: string;
  value: string;
  expense: number;
  firstDate: string;
  secondDate: string;
  isBetween = false;

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
      this.getExpense();
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
      this.supplyToUpdate = supply;
      this.supplyToUpdate.supplier = supply.supplier.id;
      this.supplyToUpdate.part = supply.part.id;
      this.supplies = [this.supplyToUpdate];
  }

  save() {
    if (this.supplyToUpdate.amount > 0 && this.supplyToUpdate.date !== '') {
      this.supplySvc.update(this.supplyToUpdate).subscribe(() => {
        this.load();
        this.supplyToUpdate = null;
        if (this.value != null) {
          this.find();
        }
      });
    }
  }

  delete(id: any) {
    this.supplySvc.delete(id).subscribe(() => {
      this.load();
      if (this.value != null) {
        this.find();
      }
    });
  }

  find() {
    this.supplySvc.find(this.field, this.value).subscribe(data => {
      this.supplies = data;
    });
  }

  getExpense(date: string = '') {
    this.supplySvc.expense(date).subscribe(data => {
      if (date === '') {
        this.expense = data;
      } else {
        window.alert(`Result on date (${this.firstDate}): ${data}`);
      }
    });
  }

  getExpenseBetween() {
    this.supplySvc.expenseBetween(this.firstDate, this.secondDate).subscribe(data => {
      window.alert(`Result between dates (from ${this.firstDate} to ${this.secondDate}): ${data}`);
    });
  }

  cancel() {
    this.load();
    this.value = null;
  }
}

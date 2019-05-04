import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SupplierService} from '../service/supplier.service';
import {Supplier} from '../model/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplierComponent implements OnInit {

  suppliers: any;
  supplier: Supplier = new Supplier();
  supplierToUpdate: Supplier;
  field: string;
  value: string;

  constructor(private svc: SupplierService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAllSuppliers().subscribe(data => {
      this.suppliers = data;
      this.supplier = new Supplier();
    });
  }

  create() {
    this.svc.create(this.supplier).subscribe(() => {
      this.load();
    });
  }

  update(supplier: Supplier) {
    this.supplierToUpdate = supplier;
    this.suppliers = [this.supplierToUpdate];
  }

  save() {
    if (this.supplierToUpdate.code !== '' && this.supplierToUpdate.name !== '' &&
        this.supplierToUpdate.address !== '' && this.supplierToUpdate.phone !== '') {
      this.svc.update(this.supplierToUpdate).subscribe(() => {
        this.load();
        this.supplierToUpdate = null;
        if (this.value != null) {
          this.find();
        }
      });
    }
  }

  delete(id: any) {
    this.svc.delete(id).subscribe(() => {
      this.load();
      if (this.value != null) {
        this.find();
      }
    });
  }

  find() {
    this.svc.find(this.field, this.value).subscribe(data => {
      this.suppliers = data;
    });
  }

  cancel() {
    this.load();
    this.value = null;
  }
}

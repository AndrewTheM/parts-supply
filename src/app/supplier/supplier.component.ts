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
    this.svc.update(supplier).subscribe(() => {
      this.load();
    });
  }

  delete(id: string) {
    this.svc.delete(id).subscribe(() => {
      this.load();
    });
  }
}

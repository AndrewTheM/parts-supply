import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SupplyService} from '../service/supply.service';
import {Supply} from '../model/supply';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplyComponent implements OnInit {

  supplies: any;
  supply: Supply;
  constructor(private svc: SupplyService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAllSupplies().subscribe(data => {
      this.supplies = data;
    });
  }

  create() {
    this.svc.create(this.supply).subscribe(() => {
      this.load();
    });
  }

  update(supply: Supply) {
    this.svc.update(supply).subscribe(() => {
      this.load();
    });
  }

  delete(id: string) {
    this.svc.delete(id).subscribe(() => {
      this.load();
    });
  }
}

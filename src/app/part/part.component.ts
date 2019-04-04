import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {PartService} from '../service/part.service';
import {Part} from '../model/part';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PartComponent implements OnInit {

  parts: any;
  part: Part = new Part();
  partToUpdate: Part;
  field: string;
  value: string;

  constructor(private svc: PartService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAllParts().subscribe(data => {
      this.parts = data;
      this.part = new Part();
    });
  }

  create() {
    this.svc.create(this.part).subscribe(() => {
      this.load();
    });
  }

  update(part: Part) {
    this.partToUpdate = part;
  }

  save() {
    if (this.partToUpdate.code !== '' && this.partToUpdate.name !== '' &&
        this.partToUpdate.type !== '' && this.partToUpdate.price > 0 &&
        this.partToUpdate.annotation !== '') {
      this.svc.update(this.partToUpdate).subscribe(() => {
        this.load();
        this.partToUpdate = null;
      });
    }
  }

  delete(id: string) {
    this.svc.delete(id).subscribe(() => {
      this.load();
    });
  }

  find() {
    this.svc.find(this.field, this.value).subscribe(data => {
      this.parts = data;
    });
  }
}

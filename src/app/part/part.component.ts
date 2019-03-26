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
  part: Part;
  constructor(private svc: PartService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAllParts().subscribe(data => {
      this.parts = data;
    });
  }

  create() {
    this.svc.create(this.part).subscribe(() => {
      this.load();
    });
  }

  update(part: Part) {
    this.svc.update(part).subscribe(() => {
      this.load();
    });
  }

  delete(id: string) {
    this.svc.delete(id).subscribe(() => {
      this.load();
    });
  }
}

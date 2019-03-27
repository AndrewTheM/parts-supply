import {Supplier} from './supplier';
import {Part} from './part';

export class Supply {
  id: string;
  supplier: any;
  part: any;
  amount: number;
  date: string;

  constructor() {
    this.supplier = new Supplier();
    this.part = new Part();
  }
}

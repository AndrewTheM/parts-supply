import {Supplier} from './supplier';
import {Part} from './part';

export class Supply {
  id: string;
  supplier: Supplier;
  part: Part;
  amount: number;
  date: string;
}

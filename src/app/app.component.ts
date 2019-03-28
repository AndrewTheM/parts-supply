import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'parts-supply';

  selected: number;

  constructor(private router: Router) {
    this.selected = 1;
    this.router.navigateByUrl('/parts');
  }

  select(selected: number) {
    this.selected = selected;
  }
}

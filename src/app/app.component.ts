import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'parts-supply';

  selected: number;

  constructor(private meta: Meta, private router: Router) {
    this.selected = 1;
    this.meta.addTag({name: 'viewport', content: 'width=device-width'});
    this.router.navigateByUrl('/parts');
  }

  select(selected: number) {
    this.selected = selected;
  }
}

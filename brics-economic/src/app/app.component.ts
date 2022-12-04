import { Component } from '@angular/core';
import { ECONOMIC_DATA } from './economic-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'BRICS Economic Comparison';
  economicData = ECONOMIC_DATA;
}

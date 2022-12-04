import { Component, Input } from '@angular/core';
import { Country } from '../model/brics';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.sass']
})
export class MembershipCardComponent {

  @Input()
  country!: Country;

  constructor() { }

  onInit() {
    console.log(this.country.name);
  }

}

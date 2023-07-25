import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
    `img {
      width: 3rem;
    }`
  ]
})
export class CountriesTableComponent {
  @Input()
  countries: Country[] = []

}

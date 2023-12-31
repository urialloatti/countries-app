import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'coutries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {

    this.isLoading = true;
    this.countries = [];
    this.countriesService.searchRegion(term).subscribe(
      countriesList => {
        this.countries = countriesList;
        this.isLoading = false;
      }
    );
  }
}

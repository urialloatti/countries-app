import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'coutries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountriesService){}

  searchByCountry( term: string): void {
    this.isLoading = true;
    this.countries = [];
    this.countriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}

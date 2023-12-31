import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryAlpha(term: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${term}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0? countries[0]:null ),
        catchError( error => of(null))
      );
  }

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`
    return this.getCountryRequest(url)
  }

  searchCountry(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${term}`
    return this.getCountryRequest(url)
  }

  searchRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${term}`
    return this.getCountryRequest(url)
  }
}

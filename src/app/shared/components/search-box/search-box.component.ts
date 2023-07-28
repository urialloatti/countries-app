import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>
  private debouncerSuscription?: Subscription

  @Input()
  public placeholder: string = ''

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(350)
      )
      .subscribe(
        value => this.onDebounce.emit(value)
      );
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  valueEmitter(value: string):void {
    this.onValue.emit(value);
  }

  onKeyPress(term: string): void {
    this.debouncer.next(term)
  }
}

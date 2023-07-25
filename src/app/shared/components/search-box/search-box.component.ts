import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = ''

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  valueEmitter(value: string):void {
    this.onValue.emit(value);
  }

}

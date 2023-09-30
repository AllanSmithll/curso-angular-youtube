import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.sass']
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<Event> = new EventEmitter();

  handleClick() {
    console.log("Clicou no botão");
  }
}

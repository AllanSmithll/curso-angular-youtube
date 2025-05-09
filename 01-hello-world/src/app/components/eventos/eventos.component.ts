import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.sass']
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
  }
}

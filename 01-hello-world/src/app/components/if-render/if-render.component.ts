import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.sass']
})
export class IfRenderComponent {
  canShow: boolean = true;
  nome: string = 'Allan';
}

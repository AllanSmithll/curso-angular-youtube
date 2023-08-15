import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent {
  name: string = "Allan Amancio";

  constructor() { }

  ngOnInit(): void {  }
}

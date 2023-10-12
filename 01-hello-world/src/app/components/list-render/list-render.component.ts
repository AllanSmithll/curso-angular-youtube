import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.sass']
})
export class ListRenderComponent {
  animalDetails = "";
  animals: Animal[] = [
    { name: "Turca", type: 'Dog', age: 5 },
    { name: "Tom", type: 'Cat', age: 10 },
    { name: "Frida", type: 'Dog', age: 5 },
    { name: "Bob", type: 'Horse', age: 1 },
  ]

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }
}

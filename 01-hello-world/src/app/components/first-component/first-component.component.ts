import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.sass']
})
export class FirstComponentComponent {
  name: string = "Allan Amancio";
  age: number = 18;
  job: string = "Desenvolvedor";
  hobbies = ["Correr","Jogar","Estudar"]
  car = { name: "Polo", year: 2000}

  constructor() { }

  ngOnInit(): void {  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.sass']
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string}

  constructor() {}

  ngOnInit(): void {}
}

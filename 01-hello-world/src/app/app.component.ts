import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  userName = 'Allan';
  userData = {
    email: 'allan@allan.com',
    role: 'Admin'
  }
  title = '01-hello-world';
}

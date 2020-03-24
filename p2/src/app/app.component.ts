import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = true;
  useSymbols = true;
  useNumbers = true;


  generatePass() {
    this.password = 'NewPass';
  }
}

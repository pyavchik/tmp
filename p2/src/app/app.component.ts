import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useSymbols = false;
  useNumbers = false;

  generatePass() {
    this.password = 'My password';
  }

  onLengthChange(event) {
    this.password = event.target.value;
  }

  onUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onUseNumber() {
    this.useNumbers = !this.useNumbers;
  }
}

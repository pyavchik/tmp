import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useLetters = true;
  useNumbers = true;
  useSymbols = true;
  generatedPassword = '';

  generatePass() {
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
    this.generatedPassword = "PASSWORD"
  }

  useLettersForPass() {
    this.useLetters = !this.useLetters;
  }

  useNumbersForPass() {
    this.useNumbers = !this.useNumbers;
  }

  useSymbolsForPass() {
    this.useSymbols = !this.useSymbols;
  }
}

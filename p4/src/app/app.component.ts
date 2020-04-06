import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p4';
  password = '';
  private useLetters: boolean = false;
  private useNumbers: boolean = false;
  private useSymbols: boolean = false;

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
  }

  getPassword() {
    return this.password;
  }

  onLettersChanged() {
    this.useLetters = !this.useLetters;
  }

  onNumbersChanged() {
    this.useNumbers = !this.useNumbers;
  }

  onSymbolsChanged() {
    this.useSymbols = !this.useSymbols;
  }
}

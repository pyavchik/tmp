import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;


  constructor() {
    this.password = '';
    this.includeLetters = true;
    this.includeNumbers = true;
    this.includeSymbols = true;
    this.length = 10;
  }

  generatePassButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ';
    const symbols = '!@#$%^&*()-+{}[]';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  useLettersForPass() {
    this.includeLetters = !this.includeLetters;
  }

  useNumbersForPass() {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbolsForPass() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event) {
    const parsedValue = parseInt(event.target.value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}

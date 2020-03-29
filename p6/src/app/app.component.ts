import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  length: number = 9;
  private useLetters: boolean = true;
  private useNumbers: boolean = true;
  private useSymbols: boolean = true;
  private useCapitalLetters: boolean = true;

  onButtonPress() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    let validChars: string = '';

    if (this.useLetters) {
      validChars = validChars + letters;
    }
    if (this.useCapitalLetters) {
      validChars = validChars + capitalLetters;
    }
    if (this.useNumbers) {
      validChars = validChars + numbers;
    }
    if (this.useSymbols) {
      validChars = validChars + symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }

  onUseCapitalLettersChange() {
    this.useCapitalLetters = !this.useCapitalLetters;
  }

  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }

  onInputSet(event) {
    this.length = parseInt(event.target.value);
  }
}

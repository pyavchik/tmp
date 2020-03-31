import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 9;
  password: string = '';
  useLetters = true;
  useNumbers = true;
  useSymbols = true;

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-{}[]><';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

  }

  onLengthChanged(event) {
    this.length = parseInt(event.target.value)
  }

  onUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}

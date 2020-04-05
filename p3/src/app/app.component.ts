import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 9;
  password = '';
  useLetters: boolean = true
  useNumbers: boolean = true
  useSymbols: boolean = true

  constructor() {
    this.onButtonClick()
  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*_-'

    let allCharsForPass = ''

    if (this.useLetters) {
      allCharsForPass += letters
    }

    if (this.useNumbers) {
      allCharsForPass += numbers
    }

    if (this.useSymbols) {
      allCharsForPass += symbols
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * allCharsForPass.length)
      generatedPassword += allCharsForPass[index]
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  onUseLettersChanged() {
    this.useLetters = !this.useLetters;
  }

  onUseNumbersChanged() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsChanged() {
    this.useSymbols = !this.useSymbols;
  }

  onLengthChange(event) {
    this.length = parseInt(event.target.value);
  }
}

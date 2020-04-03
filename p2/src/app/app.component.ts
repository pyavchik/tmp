import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = ''
  useLetters: boolean = true
  useNumbers: boolean = true
  useSymbols: boolean = true
  length: number = 11;

  generatePass() {
    const letters = 'abcdefghijklmnopqrsuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-='

    let validChars = '';

    if (this.useLetters) {
      validChars += letters
    }

    if (this.useNumbers) {
      validChars += numbers
    }

    if (this.useSymbols) {
      validChars +=symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
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

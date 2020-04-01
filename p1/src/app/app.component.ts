import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = true;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  length: number = 9;

  constructor() {
    this.generatePassButtonClick()
  }


  generatePassButtonClick() {
    this.newPassGenerate();
  }

  private newPassGenerate() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHYJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-'

    let validChars = ''

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
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
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
    this.length = parseInt(event.target.value);
  }
}

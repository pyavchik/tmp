import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  private useLetters: boolean = true;
  private useNumbers: boolean = true;
  private useSymbols: boolean = true;
  private length: number = 9;

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()_+{}"?><[]'
    let validChars: string = '';
    if (this.useLetters){
      validChars += letters;
    }
    if (this.useNumbers){
      validChars += numbers;
    }
    if (this.useSymbols){
      validChars += symbols;
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

  useLettersChange() {
    this.useLetters = !this.useLetters
  }

  useNumbersChange() {
    this.useNumbers = !this.useNumbers
  }

  useSymbolsChange() {
    this.useSymbols = !this.useSymbols
  }

  getInput(event) {
    this.length = event.target.value;
  }
}

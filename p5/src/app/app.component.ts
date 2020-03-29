import { Component } from '@angular/core';

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
    const symbols = '!@#$%^&*()';
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
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index];
    }
    if(generatedPassword !== ''){
      this.password = generatedPassword;
    }
  }

  getPassword() {
    return this.password;
  }

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }

  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }

  onInputChanged(event) {
    this.length = parseInt(event.target.value);
  }
}

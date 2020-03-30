import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useLetters: boolean = true;
  useNumbers: boolean = true;
  useSymbols: boolean = true;
  title = 'pgen';
  private length: number = 9;
  private passwrod: string = '';

  onButtonClick() {
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const numbers: string = '0123456789';
    const symbols: string = '!@#$%^&*()_+'

    let validChars = '';
    if(this.useLetters) {
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.passwrod = generatedPassword;

  }

  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }

  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }

  onUsSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }
}

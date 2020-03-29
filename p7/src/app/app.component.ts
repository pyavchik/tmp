import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters: boolean = true;
  useSymbols: boolean = true;
  useNumbers: boolean = true;
  private length: number = 9;

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '~!@#$%^&*()-=+{}[]<>';
    let validChars = '';
    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }
    let generatedPass = ''
    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }
    this.password = generatedPass;

  }

  getPassword() {
    return this.password;
  }

  onUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onLengthChanged(event) {
    this.length = parseInt(event.target.value)
  }
}

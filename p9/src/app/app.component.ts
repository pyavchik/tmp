import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private password: string = '';
  private useLetters: boolean = true;
  private useSymbols: boolean = true;
  private useNumbers: boolean = true;
  private length: number = 9;

  onButtonClick() {
    this.password = "My new Password";
    console.log('use letters - ', this.useLetters)
    console.log('use symbols - ', this.useSymbols)
    console.log('use numbers - ', this.useNumbers)
    console.log('Password length = ', this.length)
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '~!@#$%^&*()_+{}][<>?'

    let validChars = '';
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
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeUseNumbers() {
    this.useNumbers =!this.useNumbers;
  }

  onInputLength(event) {
    this.length = parseInt(event.target.value);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  onButtonClick() {
    console.log('Generate button clicked');
    this.password = "My password";
    console.log(this.useLetters)
    console.log(this.useNumbers)
    console.log(this.useSymbols)
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
}

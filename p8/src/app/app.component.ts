import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  private useLetters: boolean = false;
  private useDigits: boolean = false;
  private useSymbols: boolean = false;

  onButtonClick() {
    this.password = "New Password";
    console.log('useLetters ' + this.useLetters)
    console.log('useDigits ' + this.useDigits)
    console.log('useSymbols ' + this.useSymbols)
  }

  getPassword() {
    return this.password;
  }

  useLettersChange() {
    this.useLetters = !this.useLetters
  }

  useDigitsChange() {
    this.useDigits = !this.useDigits
  }

  useSymbolsChange() {
    this.useSymbols = !this.useSymbols
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  private useLetters: boolean = false;
  private useNumbers: boolean = false;
  private useSymbols: boolean = false;

  onButtonPress() {
    this.password = "New Password";
    console.log('Use Letters - ', this.useLetters);
    console.log('Use Numbers - ', this.useNumbers);
    console.log('Use Symbols - ', this.useSymbols);
  }

  getPassword() {
    return this.password;
  }

  onUseLettersChange() {
    this.useLetters = ! this.useLetters;
  }

  onUseNumbersChange() {
    this.useNumbers = ! this.useNumbers;
  }

  onUseSymbolsChange() {
    this.useSymbols = ! this.useSymbols;
  }
}

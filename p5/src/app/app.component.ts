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

  onButtonClick() {
    this.password = 'My password';
    console.log('use Letters: ', this.useLetters);
    console.log('use Numbers: ', this.useNumbers);
    console.log('use Symbols: ', this.useSymbols);
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

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p4';
  password = '';
  private useLetters: boolean = false;
  private useNumbers: boolean = false;
  private useSymbols: boolean = false;

  onButtonClick() {
    console.log('Generate button clicked');
    this.password = 'My Pass'
    console.log('use letters checkbox - ', this.useLetters);
    console.log('use numbers checkbox - ', this.useNumbers);
    console.log('use symbols checkbox - ', this.useSymbols);
  }

  getPassword() {
    return this.password;
  }

  onLettersChanged() {
    this.useLetters = !this.useLetters;
  }

  onNumbersChanged() {
    this.useNumbers = !this.useNumbers;
  }

  onSymbolsChanged() {
    this.useSymbols = !this.useSymbols;
  }
}

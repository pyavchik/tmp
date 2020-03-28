import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters: boolean = false;
  useSymbols: boolean = false;
  useNumbers: boolean = false;

  onButtonClick() {
    this.password = 'My password';
    console.log('useLetters ' + this.useLetters);
    console.log('useSymbols ' + this.useSymbols);
    console.log('useNumbers ' + this.useNumbers);
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
}

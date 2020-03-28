import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private password: string = '';
  private useLetters: boolean = false;
  private useSymbols: boolean = false;
  private useNumbers: boolean = false;

  onButtonClick() {
    this.password = "My new Password";
    console.log('use letters - ', this.useLetters)
    console.log('use symbols - ', this.useSymbols)
    console.log('use numbers - ', this.useNumbers)
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
}

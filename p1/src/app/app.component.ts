import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 9;




  generatePassButtonClick() {
    this.password = 'Password new'
  }

  useLettersForPass() {
    this.includeLetters = !this.includeLetters;
  }

  useNumbersForPass() {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbolsForPass() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event) {
    this.length = parseInt(event.target.value);
  }
}

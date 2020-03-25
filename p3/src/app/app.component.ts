import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  onButtonClick() {
    console.log('Generate button clicked');
    this.password = "My password";
  }

  getPassword() {
    return this.password;
  }
}

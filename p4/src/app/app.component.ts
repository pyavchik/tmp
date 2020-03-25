import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p4';
  password = '';

  onButtonClick() {
    console.log('Generate button clicked');
    this.password = 'My Pass'
  }

  getPassword() {
    return this.password;
  }
}

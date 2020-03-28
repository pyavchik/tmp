import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private password: string = '';

  onButtonClick() {
    this.password = "My new Password";
  }


}

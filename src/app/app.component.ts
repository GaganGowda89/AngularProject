import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  //Inline styling
  styles:[`
  h1{
    color: red;
  }
  `]
})
export class AppComponent {
  title = 'Bangariii';
}

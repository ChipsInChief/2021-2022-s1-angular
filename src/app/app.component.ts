import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilOne: string = 'Machine à pain';
  appareilTwo: string = 'Télévision';
  appareilThree: string = 'Frigo';

  statutApp1: string = 'éteint';
  statutApp2: string = 'allumé';
  statutApp3: string = 'éteint';

  constructor() {
    setTimeout(
      () => { this.isAuth = true; },
      4000
    );
  }
  onAllumer(){
    console.log('On allume tout !');
  }
}

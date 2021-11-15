import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Machine à laver', status: 'éteint'
    },
    {
      name: 'Four', status: 'allumé'
    },
    {
      name: 'Ordinateur', status: 'éteint'  
    }
  ]

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

import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils?: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => { this.isAuth = true; },
      4000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Êtes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }

    return true;
  }

}

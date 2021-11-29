import { Component, Input, OnInit } from '@angular/core';

import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName?: string;
  // appareilName: string ='Blender';
  @Input() appareilStatus: string = 'éteint';
  @Input() idAppareil: number = -1;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    return this.appareilStatus === 'éteint' ? 'grey' : 'green'; 
    
    // if(this.appareilStatus === 'éteint') {
    //   return 'grey';
    // } else {
    //   return 'green';
    // }
  }

  onSwitch() {
    if (this.appareilStatus === 'éteint'){
      this.appareilService.switchOnOne(this.idAppareil);
    } else if (this.appareilStatus === 'allumé'){
      this.appareilService.switchOffOne(this.idAppareil);
    }
  }
}

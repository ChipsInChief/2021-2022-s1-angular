import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName?: string;
  // appareilName: string ='Blender';
  @Input() appareilStatus: string = 'éteint';

  constructor() { }

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

}

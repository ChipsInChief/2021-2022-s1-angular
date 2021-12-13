import { Subject } from "rxjs/Subject";

export class AppareilService {
    
  appareilsSubject = new Subject<any[]>();

  private appareils = [
        {
          id: 101, name: 'Machine à laver', status: 'éteint'
        },
        {
          id: 23, name: 'Four', status: 'allumé'
        },
        {
          id: 3330, name: 'Ordinateur', status: 'éteint'  
        }
      ]

    emitAppareilSubject(){
      this.appareilsSubject.next(this.appareils.slice());
    }
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }
    switchOnOne(i: number){
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
    }
    switchOffOne(i: number){
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
    }
    getAppareilById(id: number){
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
    }
}
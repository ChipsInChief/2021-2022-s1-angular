export class AppareilService {
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
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }
    switchOnOne(i: number){
      this.appareils[i].status = 'allumé';
    }
    switchOffOne(i: number){
      this.appareils[i].status = 'éteint';
    }
}
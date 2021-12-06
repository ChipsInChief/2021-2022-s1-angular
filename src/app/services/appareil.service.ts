export class AppareilService {
    appareils = [
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
    getAppareilById(id: number){
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
    }
}
import moment from 'moment';

class Moment {
  constructor(){
    this.moment = moment;
    this.moment.locale('es-us')
    this.moment = this.moment();

  }
  get_period(subtract = 0){
    const moment = this.moment.clone();
    return moment.subtract(subtract, 'months').format('MMMM YYYY');
  }

  


}

export default new Moment();

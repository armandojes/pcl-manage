import moment from 'moment';

class Moment {

  constructor(){
    this.moment_ = moment;
    this.moment_.locale('es-us');
  }

  moment(param){
    const moment = this.moment_(param);
    return moment.clone();
  }

  get_period(subtract = 0){
    const moment = this.moment();
    return moment.subtract(subtract, 'months').format('MMMM YYYY');
  }


}

export default new Moment();

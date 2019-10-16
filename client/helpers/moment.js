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

  get_date(){
    const moment = this.moment();
    const date = moment.format('dddd D MMMM YYYY');
    return date;
  }

  get_day_of_month(){
    const moment = this.moment();
    const day = moment.format('D');
    return day;
  }

  to_period(date){
    const moment = this.moment(date);
    return moment.format('MMMM YYYY');
  }

}

export default new Moment();

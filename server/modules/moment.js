class Moment {
  constructor (){
    this.months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ]
  }

  extract_month_name(period){
    return period.split(' ')[0].toLowerCase();
  }

  // verifica si es un periodo mas actual.
  is_after(period, period_reference){
    if (period_reference === 'pending') return false;

    //si el año es mayor retiornamos true;
    const year_actually = period.split(' ')[1];
    const year_reference = period_reference.split(' ')[1];
    if (year_actually > year_reference) return true;

    const period_parsed = this.extract_month_name(period);
    const period_reference_parsed = this.extract_month_name(period_reference);
    const index_period = this.months.indexOf(period_parsed);
    const index_reference = this.months.indexOf(period_reference_parsed);

    return index_period > index_reference ? true : false;

  }

}

export default new Moment()

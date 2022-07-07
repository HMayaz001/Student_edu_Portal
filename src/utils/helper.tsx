import moment from 'moment';

export function dateFormat(date: Date | string) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

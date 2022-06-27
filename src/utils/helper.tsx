import moment from 'moment';

export function dateFormat(date: any) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

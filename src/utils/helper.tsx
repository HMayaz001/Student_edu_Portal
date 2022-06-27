import moment from 'moment';

export function dateFormat(date: Date | String) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

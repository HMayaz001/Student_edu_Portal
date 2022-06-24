import moment from 'moment';

export function dateFormat() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

import moment from 'moment';

<<<<<<< HEAD
export function dateFormat(date: Date | string) {
=======
export function dateFormat(date: Date | String) {
>>>>>>> 998c816c154516b257c8194eef6fc38f844bfb45
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

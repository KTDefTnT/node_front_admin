import moment from 'moment';

export default function (value: any, newFormat: any, oldFormat = 'YYYYMMDD HH:mm:ss', target: any) {
  if (value && newFormat) {
    return moment(value, oldFormat).format(newFormat);
  }
  return value;
}

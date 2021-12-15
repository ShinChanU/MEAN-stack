import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})

export class DistancePipe implements PipeTransform {
  transform(distance: number): string {
    const isNumeric = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    if (distance && isNumeric(distance)) {
      let unit = 'm';
      let thisDistance = '0';
      if (distance > 1000) {
        thisDistance = (distance / 1000).toFixed(1);
        unit = 'km';
      } else {
        thisDistance = Math.floor(distance).toString();
      }
      return thisDistance + unit;
    } else {
      return '?';
    }
  }
}

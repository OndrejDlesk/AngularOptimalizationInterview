import { Injectable } from '@angular/core';

const NumRange: [number, number] = [23, 28];

@Injectable({
  providedIn: 'root',
})
export class ListGeneratorService {
  constructor() {}

  generatelist(x: number): Array<any> {
    var list: Array<any> = [];

    for (let i = 0; i < x; i++) {
      list.push({
        label: `Name ${i + 1}`,
        number: this.generatenumber(NumRange),
      });
    }

    return list;
  }

  generatenumber(numrange: [number, number]) {
    var number = Math.floor(
      Math.random() * (numrange[1] - numrange[0]) + numrange[0]
    );

    return number;
  }
}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FizzbuzzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FizzbuzzProvider {
  public input: any;
  public output: any;

  constructor() {
    console.log('Hello FizzbuzzProvider Provider');
  }

  playFizz(arg) {
    switch (true) {
      case(arg < 1):
        this.output = 'Stop being negative';
        break;
      case(this.isDivisibleBy(arg, 15)):
        this.output = 'fizzbuzz';
        break;
      case(this.isDivisibleBy(arg, 5)):
        this.output = 'buzz';
        break;
      case(this.isDivisibleBy(arg, 3)):
        this.output = 'fizz';
        break;
      case(typeof arg == 'string'):
        this.output = 'Awesome text';
        break;
      default:
        this.output = 'leave me alone!';
        break;
    }
  }

  isDivisibleBy(num, divisor) {
    return num % divisor == 0;
  }

}

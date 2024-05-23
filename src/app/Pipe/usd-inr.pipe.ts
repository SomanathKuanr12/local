import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdINR'
})
export class UsdINRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderType'
})
export class OrderTypePipe implements PipeTransform {

  transform(value: string): unknown {

    if(value == '1001')
      return 'Kargoda'
    else if(value == '1002')
      return 'Depoda'


    return 'Hazırlanıyor';
  }

}

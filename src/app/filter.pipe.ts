import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue: string, propName : string): any {
    if (value.length === 0 || filterValue.length ===0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {     
      if (item[propName].toString().toLowerCase() === filterValue.toString().toLowerCase()) {
        resultArray.push(item);
      }    
    }
    return resultArray;
  }

}

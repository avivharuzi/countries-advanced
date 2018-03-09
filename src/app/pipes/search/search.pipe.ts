import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue?: any): any {
    if (!searchValue) {
      return value;
    } else {
      let temp = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i].name.toString().toLowerCase().includes(searchValue.toLowerCase())) {
          temp.push(value[i]);
        }
      }
      return temp;
    }
  }

}

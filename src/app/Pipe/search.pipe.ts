import { Pipe, PipeTransform } from '@angular/core';
import { Students } from '../Model/Students';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:Students[],searchBy:string){
    if(searchBy=='')
      {
        return list;
      }
      else {
         return list.filter((std)=>{
            return std.name.includes(searchBy.toLocaleLowerCase())
        })
      }
  }

}

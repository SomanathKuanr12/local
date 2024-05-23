import { Pipe, PipeTransform } from "@angular/core";
import { Students } from "../Model/Students";



@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(list: Students[], filterBy: string) {
       if(filterBy.toLowerCase()==='all' || filterBy==='' || filterBy.length==0){
        return list;
       }
       else{
        return list.filter((std)=>{
            return std.gender.toLowerCase()==filterBy.toLowerCase();
        })
       }
    }
 
}
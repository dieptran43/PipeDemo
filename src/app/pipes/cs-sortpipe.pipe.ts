import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{
    transform(value: string[], args: string) {
        let arr: string[] = value.slice();
        arr.sort()
        if(args == "DESC"){
            arr = arr.reverse();
        }
       return arr
    }

}
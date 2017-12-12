import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'arrpipe'
})
export class ArrayPipe implements PipeTransform {
    transform(arr: number[], args: string) {
        console.log(args)
        return arr.filter(x => {
            if (args === 'odd') {
               return x % 2 != 0
            } else {
               return x % 2 == 0
            }
        })
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'categorypipe'})
export class CategoryPipe implements PipeTransform {
    transform(arr: string[]): any {
        let rs: string[] =[];
        arr.forEach(x =>{
            if(rs.indexOf(x) <= -1) //kiem tra da ton tai trong mang chua
            {
                rs.push(x);
            }
        })
        return rs.join("; ");
    }
}
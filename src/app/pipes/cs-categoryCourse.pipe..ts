import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'categorycourse'})
export class CategoryCoursePipe implements PipeTransform {
    transform(arr: string[]): any {
        let rs: string[] =[];
        arr.forEach(x =>{
            if(rs.indexOf(x) <= -1) //kiem tra da ton tai trong mang chua
            {
                rs.push('<a><span class="label label-success">'+x+'</span></a>');
            }
        })
        return rs.join('  ');
    }
}
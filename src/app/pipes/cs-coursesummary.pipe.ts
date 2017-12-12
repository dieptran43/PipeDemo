import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'coursesummary'})
export class CourseSummaryPipe implements PipeTransform {
    transform(value: string,numberChar: number = 0, defaultChar: string = "..."): any {
        if(!value){
            return null
        }
        console.log(numberChar + "-----------")
        let defaultnumberChar: number = 20;  
        if(numberChar == 0){
            defaultnumberChar = 50;
        }
        else if(numberChar == 1){
            defaultnumberChar = 100;
        }
        else if(numberChar == 2){
            defaultnumberChar = value.length;
        }
        // switch(numberChar){
        //     case 0:
        //     defaultnumberChar = 50;
        //     break;
        //     case 1:
        //     defaultnumberChar = 100;
        //     break;
        //     case 2:
        //     defaultnumberChar = value.length;
        //     break;
        // }
        console.log(defaultnumberChar + "End-----------")    
        let defaultCharter: string = value.length > defaultnumberChar? defaultChar: null;
        return value.substr(0,defaultnumberChar) + defaultCharter;       

    }
}
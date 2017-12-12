import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {
    // transform(value: string, ...args: any[]): any {
    //     if(!value){
    //         return null
    //     }
    //     let numberChar: number = 20;
    //     let defaultChar: string = "...";
    //     numberChar = args[0]? args[0]: numberChar;
    //     defaultChar = args[1]? args[1]: defaultChar;
    //     return value.substr(0,numberChar) + defaultChar;       

    // }
    transform(value: string,numberChar: number = 20, defaultChar: string = "..."): any {
        if(!value){
            return null
        }        
        let defaultCharter: string = value.length > numberChar? defaultChar: null;
        return value.substr(0,numberChar) + defaultCharter;       

    }
}
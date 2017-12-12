import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capilalize'
})
export class CapilatizePipe implements PipeTransform{
    transform(value: string):string {
        return value.replace(/\w\S*/g, function(txt){
            //console.log(txt);
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
    }

}


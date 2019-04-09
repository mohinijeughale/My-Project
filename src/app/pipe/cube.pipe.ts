import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'cube'
})
export class Cube implements PipeTransform{
    transform(value:number):number{
        return value*value*value;
    }

}
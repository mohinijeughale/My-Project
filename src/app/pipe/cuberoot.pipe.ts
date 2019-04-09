import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'CubeRoot'
})
export class CubeRoot implements PipeTransform{
    transform(value:number):number{
        return Math.cbrt(value);
    
    }
    

}
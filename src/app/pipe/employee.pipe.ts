import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name : 'empPipe'
})
export class EmployeePipe implements PipeTransform{
    transform(value:string,gender:string):string{
        if(gender.toLowerCase()=='female'){
            return "Ms." + value
        } 
        else{
            return "Mr." + value

        }
    }

}
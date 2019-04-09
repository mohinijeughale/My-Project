import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { TvModel } from '../model/tv.model';



@Component({
    selector :'app-keyboard',
    templateUrl:'./keyboard.component.html',
    styleUrls:['./keyboard.component.css']

})
export class KeyboardComponent{
    demo = 123;
    name:string ="mohini";
    name1:string ="assimilate";
    firstName:string="Ovee";

    employee:any[];
    constructor (private _tv:CustomerService)
    {
        this.employee=this._tv.getEmpolyee();

    }
    
}
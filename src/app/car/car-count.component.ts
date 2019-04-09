import { Component, Input,OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
    selector:'app-car-count',
    templateUrl:'./car-count.component.html',
    styleUrls:['./car-count.component.css']
})
export class CarCountComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    } 
    @Input() all :number;   //input o/p
    @Input() male:number;
    @Input() female:number;
    employee:any[];
    constructor(private _emp:CustomerService){ // service
       this.employee=this._emp.getEmpolyee()
    }
   
    
}
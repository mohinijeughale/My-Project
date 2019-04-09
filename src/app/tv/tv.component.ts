import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
    selector:'app-tv',
    templateUrl:'./tv.component.html',
    styleUrls:['./tv.component.css']

})
export class TvComponent{
            customer:any[];
            constructor (private _tv:CustomerService)
            {
                this.customer=this._tv.getCustomer();

            }
            
        
}
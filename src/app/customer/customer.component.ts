import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';


@Component({
    selector:'app-customer',
    templateUrl:'./customer.component.html',
    styleUrls:['./customer.component.css']

})
export class CustomerComponent{
  customer:any[];
  constructor (private _tv:CustomerService)
  {
      this.customer=this._tv.getCustomer();

  }
  

}
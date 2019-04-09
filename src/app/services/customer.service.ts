import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { TvModel } from '../model/tv.model';


@Injectable()

export class CustomerService{
    customer : TvModel[];

    getCustomer() :TvModel[]{
        return[
            {id:101,name:"mohini",gender:"female",salary:10000,dob:"09/12/1990"},
            {id:102,name:"RAJ",gender:"male",salary:10000,dob:"09/12/1990"},
            {id:103,name:"Pravin",gender:"male",salary:10000,dob:"09/12/1990"},
            {id:104,name:"Ankita",gender:"female",salary:10000,dob:"09/12/1990"},
            {id:105,name:"Jaya",gender:"female",salary:10000,dob:"09/12/1990"},
            {id:106,name:"Aabhi",gender:"male",salary:10000,dob:"09/12/1990"},
        ]
    }
     employee : TvModel[];
     getEmpolyee() :TvModel[]{
         return[
             {id:100,name:"Ravi",gender:"male",salary:10000,dob:"01/01/1999"},
             {id:101,name:"MANISHA",gender:"female",salary:10000,dob:"01/01/1999"},
             {id:102,name:"Pushkar",gender:"male",salary:10000,dob:"01/01/1999"},
             {id:103,name:"Vaibhav",gender:"male",salary:10000,dob:"01/01/1999"},
             {id:104,name:"Bhoomi",gender:"female",salary:10000,dob:"01/01/1999"},
         ]
     }


}
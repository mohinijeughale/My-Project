import { Component } from '@angular/core';



@Component({
    selector:'app-mobile',
    templateUrl:'./mobile.component.html',
    styleUrls :['./mobile.component.css']
    
})
export class MobileComponent{
    mobile : any[] = [
        {model:"note4",mobilename:"Samsung",price:25000},
        {model:"BG98",mobilename:"Nokia",price:17000},
        {model:"MJ09",mobilename:"Lenovo",price:15000},
        {model:"NH098",mobilename:"viva",price:9000},
    ]
    
}
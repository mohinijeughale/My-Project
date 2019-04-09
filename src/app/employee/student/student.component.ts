import {Component}from '@angular/core'


@Component({
    selector:'Student-comp',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']

})


export class studentComponent{
    public title="welcome to Assimilate Technology"
     Name:string ="Vikas"
     Surname:string="Jeughale"
     Adress:string="Chikhali"
     DOB:string="10/10/1998"

     showData:boolean=true;
     showDetails():boolean {
         return this.showData=! this.showData;
     }

    student:any[]=[
        {id:101,name:"Mohini",lastName:"Jeughale",Gender:"female",adress:"Pune"},
        {id:102,name:"shubham",lastName:"Pawar",Gender:"male",adress:"Pune"},
        {id:103,name:"Mayur",lastName:"Jadhav",Gender:"male",adress:"Pune"},
        {id:104,name:"Sanket",lastName:"kumar",Gender:"male",adress:"Pune"},
        {id:105,name:"Vina",lastName:"Ingle",Gender:"female",adress:"Pune"},
        {id:106,name:"Minal",lastName:"Sonune",Gender:"female",adress:"Pune"},
        {id:107,name:"Pawan",lastName:"ghube",Gender:"male",adress:"Pune"},

    ]

    

    }
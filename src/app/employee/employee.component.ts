import { Component } from '@angular/core';



@Component({
    selector :'app-employee',
    templateUrl :'./employee.component.html',
    styleUrls :['./employee.component.css']

})
export class EmployeeComponent {

    firstName : string = "Mohini";
    lastName : string = "Jeughale";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    courseName : string = "Angular";
    place : string = "Pune";
    courseFee : number =10000;


employee : any[] =[
    {id:101,name:"Mohini",gender:"female",salary:20000,dob:"05/08/90"},
    {id:102,name:"Pravin",gender:"male",salary:25000,dob:"12/08/98"},
    {id:103,name:"kiran",gender:"female",salary:10000,dob:"09/12/89"},
    {id:104,name:"mandar",gender:"male",salary:19000,dob:"09/07/80"},
    {id:105,name:"minal",gender:"female",salary:12000,dob:"06/02/85"},

    ];
    show:boolean=true;
    showDetails():boolean{
        //console.log(this.show);
        return this.show=!this.show; 
    }
    

}
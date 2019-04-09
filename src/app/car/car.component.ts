import { Component } from '@angular/core';


@Component({
    selector: 'app-car',
    templateUrl:'./car.component.html',
    styleUrls:['./car.component.css']
})
export class CarComponent{
name :string ="Ashu"; 
college :string ="RSCE";
gender :string="Female";
DOB:string ="05/08/90";
colspan :number=4;

buttonIsclicked(){
    console.log("Button is clicked")
}
showData:boolean=true;
showDetails(): boolean{
    return this.showData =! this.showData;

}
employee :any []=[
    {id:"101",name:"Mohini",gender:"female",salary:"10000",dob:"10/10/2000"},
    {id:"102",name:"Amol",gender:"male",salary:"14000",dob:"09/05/2002"},
    {id:"103",name:"Chandu",gender:"male",salary:"10700",dob:"12/07/2006"},
    {id:"104",name:"Ashwini",gender:"female",salary:"19000",dob:"03/05/1998"},
];
getAllEmployeeCount (): number{
    console.log(this.employee.length);
    return this.employee.length;
}
getAllMaleEmployeeCount (): number{
    return this.employee.filter(data=>data.gender==='male').length
}
getAllFemaleEmployeeCount ():number{
    return this.employee.filter(data=>data.gender==='female').length
}
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { MobileComponent } from './mobile/mobile.component';
import { studentComponent } from './employee/student/student.component';
import { DemoComponent } from './shared/demo/demo.component';
import { CarComponent } from './car/car.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { CarCountComponent } from './car/car-count.component';
import { SquarePipe } from './pipe/square.pipe';
import { SquareRoot } from './pipe/squareroot.pipe';
import { Cube } from './pipe/cube.pipe';
import { CubeRoot } from './pipe/cuberoot.pipe';
import { EmployeePipe } from './pipe/employee.pipe';
import { StudentPipe } from './pipe/student.pipe';
import { CustomerService } from './services/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { TvComponent } from './tv/tv.component';
import { CountriesComponent } from './country/countries/countries.component';
import { Countrieservice } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,MobileComponent,studentComponent,
    DemoComponent,CarComponent,KeyboardComponent,CarCountComponent,SquarePipe,SquareRoot,Cube,CubeRoot,EmployeePipe,StudentPipe,CustomerComponent,TvComponent, CountriesComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [CustomerService,Countrieservice],
   // EmployeeComponent,MobileComponent,studentComponent
  bootstrap:[AppComponent]
})
export class AppModule { }

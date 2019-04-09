import { Component } from '@angular/core';


@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']

})
export class DemoComponent {
    firstName: string = "Assimilate";
    imagePath: string = "assets/images/02.png";
    isdisabled: boolean = false;

    imagepath: string = "assets/images/02.png";
    isBold: boolean = true;
    isItalic: boolean = true;
    fontSize = 30
    addClasses() {
        let classes = {
            'boldclass': this.isBold ? 'bold' : 'normal',
            'italicclass': this.isItalic ? 'italic' : 'normal',
        }
        return classes;
    }



    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        }
        return styles;
    }

buttonIsclicked(){
    console.log("Button is Clicked")
}

 show : boolean = true;
 showDetails(): boolean{
     return this.show = ! this.show;
 }
} 
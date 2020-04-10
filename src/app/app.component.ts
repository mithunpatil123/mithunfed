import { Component } from '@angular/core';
import {Employee } from './employee';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  //template: `<p>App Component</p>
 //<app-hello [comp]="company" [n]="num"></app-hello>
  //`
  templateUrl: './app.component.html'

})
export class AppComponent  {
 
company:String = "Wipro";
num:number = 22;
  message:String = "Hddd";
  numArray:number[]=[1,3,4,5,6];
  nameFilter:String = '';
  employees:Employee = [
    { "empId": 1, 
      "name": "Krishna", 
      "age":23
    },
    { "empId": 2, 
      "name": "Mithun", 
    "age":33
    },
    { "empId": 3, 
      "name": "Mithun123", 
    "age":33
    }
];

}

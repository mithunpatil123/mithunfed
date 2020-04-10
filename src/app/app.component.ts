import { Component } from '@angular/core';
import {Employee } from './employee';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template: `<p>App Component</p>
 <app-hello [comp]="company" [n]="num"></app-hello>
  `
  //templateUrl: './app.component.html'
  /*template: `<p> Event Binding = {{message}}</p>
 
  <p appHighlight>Mithunggg</p>
  <input type = "text"  [(ngModel)]="message"/>
  <ul><li *ngFor= "let a of numArray ">{{a}}</li></ul>
{{numArray | odd}}
  <ul><li *ngFor= "let a of emp">{{a.name}}</li></ul>`*/

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
    }
];

}

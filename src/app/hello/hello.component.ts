import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<p>HelloComponent</p>{{comp}} {{n+10}}',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  
    @Input() comp;
    @Input() n:number = 0;
  

}
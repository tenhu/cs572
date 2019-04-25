import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
      smart works!
    </p>

    <ul>
    <li *ngFor="let item of items"> <app-dumb [value]="item" > </app-dumb> </li>
    </ul>


    <br/>

    <div appIsVisible [visible]="bool" >Custom Directive</div><br>
    
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  constructor() { }

  private bool = false;
  private items = [1, 2, 3, 4, 5];

  ngOnInit() {
  }

}

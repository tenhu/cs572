import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <Button (click)="decrease()" >-</Button>
    {{counterValue}}
    <Button (click)="increase()">+</Button>
  `,
  styles: []
})
export class CounterComponent  implements OnInit{
  
  @Input() counter;
  counterValue = 0;


  constructor() {
    console.log("[Cons]"+ this.counter);
  }

  ngOnInit(){
    console.log("[On]" + this.counter)
    this.counterValue = this.counter? this.counter : 0 ;
  };

  @Output() counterChange = new EventEmitter();
  
  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  
}

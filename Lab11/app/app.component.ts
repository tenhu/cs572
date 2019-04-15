import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [counter]="counterValue" (counterChange)="showCounter($event)" ></app-counter>
    <br />
    Component Counter Value = {{ComponentCounterValue}} 
  `,
  styles: []
})
export class AppComponent {
  title = 'Lab11';
  counterValue = 5;

  ComponentCounterValue = this.counterValue;

  showCounter(data){
    this.ComponentCounterValue = data;
    //console.log("[App Component]" + this.ComponentCounterValue)
  }
}

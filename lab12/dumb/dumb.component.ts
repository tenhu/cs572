import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
     
      {{dumbValue}}
    
  `,
  styles: []
})
export class DumbComponent implements OnInit {

  private dumbValue;
  constructor() { }

  @Input() value;
  ngOnInit() {
    this.dumbValue = this.value;    
  }

}

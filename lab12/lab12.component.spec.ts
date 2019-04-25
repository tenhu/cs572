import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab12Component } from './lab12.component';

describe('Lab12Component', () => {
  let component: Lab12Component;
  let fixture: ComponentFixture<Lab12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

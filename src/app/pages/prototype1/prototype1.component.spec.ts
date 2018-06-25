import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prototype1Component } from './prototype1.component';

describe('Prototype1Component', () => {
  let component: Prototype1Component;
  let fixture: ComponentFixture<Prototype1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prototype1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prototype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prototype2Component } from './prototype2.component';

describe('Prototype2Component', () => {
  let component: Prototype2Component;
  let fixture: ComponentFixture<Prototype2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prototype2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prototype2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

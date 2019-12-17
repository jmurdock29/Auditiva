import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fracciones2Component } from './fracciones2.component';

describe('Fracciones2Component', () => {
  let component: Fracciones2Component;
  let fixture: ComponentFixture<Fracciones2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fracciones2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fracciones2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

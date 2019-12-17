import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ1Fc2Component } from './activ1.component';

describe('Activ1Fc2Component', () => {
  let component: Activ1Fc2Component;
  let fixture: ComponentFixture<Activ1Fc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ1Fc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ1Fc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

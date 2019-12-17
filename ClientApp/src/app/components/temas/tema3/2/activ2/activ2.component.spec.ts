import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ2Fc2Component } from './activ2.component';

describe('Activ2Fc2Component', () => {
  let component: Activ2Fc2Component;
  let fixture: ComponentFixture<Activ2Fc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ2Fc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ2Fc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

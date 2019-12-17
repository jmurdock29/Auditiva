import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ1DVComponent } from './activ1.component';

describe('Activ1DVComponent', () => {
  let component: Activ1DVComponent;
  let fixture: ComponentFixture<Activ1DVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ1DVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ1DVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

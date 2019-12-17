import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFinalComponent } from './actividad-final.component';

describe('ActividadFinalComponent', () => {
  let component: ActividadFinalComponent;
  let fixture: ComponentFixture<ActividadFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

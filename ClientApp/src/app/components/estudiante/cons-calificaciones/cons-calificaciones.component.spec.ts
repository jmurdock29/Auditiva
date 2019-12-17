import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsCalificacionesComponent } from './cons-calificaciones.component';

describe('ConsCalificacionesComponent', () => {
  let component: ConsCalificacionesComponent;
  let fixture: ComponentFixture<ConsCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

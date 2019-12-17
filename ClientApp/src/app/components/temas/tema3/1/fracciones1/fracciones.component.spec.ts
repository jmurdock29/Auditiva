import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraccionesComponent } from './fracciones.component';

describe('FraccionesComponent', () => {
  let component: FraccionesComponent;
  let fixture: ComponentFixture<FraccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

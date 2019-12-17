import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdEstudianteComponent } from './gd-estudiante.component';

describe('GdEstudianteComponent', () => {
  let component: GdEstudianteComponent;
  let fixture: ComponentFixture<GdEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

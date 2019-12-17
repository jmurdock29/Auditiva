import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdEstudianteComponent } from './md-estudiante.component';

describe('MdEstudianteComponent', () => {
  let component: MdEstudianteComponent;
  let fixture: ComponentFixture<MdEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

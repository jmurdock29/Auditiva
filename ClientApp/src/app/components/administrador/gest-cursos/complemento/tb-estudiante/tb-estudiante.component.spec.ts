import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbEstudianteComponent } from './tb-estudiante.component';

describe('TbEstudianteComponent', () => {
  let component: TbEstudianteComponent;
  let fixture: ComponentFixture<TbEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNotasComponent } from './editar-notas.component';

describe('EditarNotasComponent', () => {
  let component: EditarNotasComponent;
  let fixture: ComponentFixture<EditarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

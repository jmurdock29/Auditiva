import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConslProfesorComponent } from './consl-profesor.component';

describe('ConslProfesorComponent', () => {
  let component: ConslProfesorComponent;
  let fixture: ComponentFixture<ConslProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConslProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConslProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

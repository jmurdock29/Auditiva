import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdProfesorComponent } from './gd-profesor.component';

describe('GdProfesorComponent', () => {
  let component: GdProfesorComponent;
  let fixture: ComponentFixture<GdProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

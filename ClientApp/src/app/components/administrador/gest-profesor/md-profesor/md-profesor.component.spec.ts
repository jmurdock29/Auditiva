import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdProfesorComponent } from './md-profesor.component';

describe('MdProfesorComponent', () => {
  let component: MdProfesorComponent;
  let fixture: ComponentFixture<MdProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

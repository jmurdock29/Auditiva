import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbProfesorComponent } from './tb-profesor.component';

describe('TbProfesorComponent', () => {
  let component: TbProfesorComponent;
  let fixture: ComponentFixture<TbProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

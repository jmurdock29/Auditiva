import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ2FcComponent } from './activ2.component';

describe('Activ2FcComponent', () => {
  let component: Activ2FcComponent;
  let fixture: ComponentFixture<Activ2FcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ2FcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ2FcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

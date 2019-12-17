import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ2MPComponent } from './activ2.component';

describe('Activ2MPComponent', () => {
  let component: Activ2MPComponent;
  let fixture: ComponentFixture<Activ2MPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ2MPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ2MPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

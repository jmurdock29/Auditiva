import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ2DVComponent } from './activ2.component';

describe('Activ2DVComponent', () => {
  let component: Activ2DVComponent;
  let fixture: ComponentFixture<Activ2DVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ2DVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ2DVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ1MPComponent } from './activ1.component';

describe('Activ1MPComponent', () => {
  let component: Activ1MPComponent;
  let fixture: ComponentFixture<Activ1MPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ1MPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ1MPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

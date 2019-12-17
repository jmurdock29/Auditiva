import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ3MPComponent } from './activ3.component';

describe('Activ3MPComponent', () => {
  let component: Activ3MPComponent;
  let fixture: ComponentFixture<Activ3MPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ3MPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ3MPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

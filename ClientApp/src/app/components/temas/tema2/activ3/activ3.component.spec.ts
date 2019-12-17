import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ3DVComponent } from './activ3.component';

describe('Activ3DVComponent', () => {
  let component: Activ3DVComponent;
  let fixture: ComponentFixture<Activ3DVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ3DVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ3DVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

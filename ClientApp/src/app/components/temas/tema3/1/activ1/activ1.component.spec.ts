import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activ1FcComponent } from './activ1.component';

describe('Activ1FcComponent', () => {
  let component: Activ1FcComponent;
  let fixture: ComponentFixture<Activ1FcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ1FcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activ1FcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

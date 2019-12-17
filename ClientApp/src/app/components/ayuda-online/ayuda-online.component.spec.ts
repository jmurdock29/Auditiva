import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaOnlineComponent } from './ayuda-online.component';

describe('AyudaOnlineComponent', () => {
  let component: AyudaOnlineComponent;
  let fixture: ComponentFixture<AyudaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

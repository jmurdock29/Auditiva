import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosNavComponent } from './formularios-nav.component';

describe('FormulariosNavComponent', () => {
  let component: FormulariosNavComponent;
  let fixture: ComponentFixture<FormulariosNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariosNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

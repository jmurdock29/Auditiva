import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularioDVComponent } from './vocabulario-dv.component';

describe('VocabularioDVComponent', () => {
  let component: VocabularioDVComponent;
  let fixture: ComponentFixture<VocabularioDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularioDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularioDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

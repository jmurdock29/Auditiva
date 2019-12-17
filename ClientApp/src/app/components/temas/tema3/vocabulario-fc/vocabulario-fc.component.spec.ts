import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularioFCComponent } from './vocabulario-fc.component';

describe('VocabularioFCComponent', () => {
  let component: VocabularioFCComponent;
  let fixture: ComponentFixture<VocabularioFCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularioFCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularioFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptospreviosComponent } from './conceptosprevios.component';

describe('ConceptospreviosComponent', () => {
  let component: ConceptospreviosComponent;
  let fixture: ComponentFixture<ConceptospreviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptospreviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptospreviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

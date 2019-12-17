import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularioMPComponent } from './vocabulario-mp.component';

describe('VocabularioMPComponent', () => {
  let component: VocabularioMPComponent;
  let fixture: ComponentFixture<VocabularioMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularioMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularioMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
